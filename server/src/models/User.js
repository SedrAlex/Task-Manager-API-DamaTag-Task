const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: 50,
    },
    email: {
      type: String,
      match: [
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        "Please provide a valid email address",
      ],
      required: [true, "Please provide an email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6,
    },
  },
  {
    methods: {
      generateJWT() {
        return jwt.sign(
          { name: this.name, userId: this._id },
          process.env.TOKEN_SECRET_KEY,
          {
            expiresIn: "24h",
          }
        );
      },

      checkPassword(password) {
        const isMatch = bcrypt.compareSync(password, this.password);
        return isMatch;
      },
    },
  }
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports =  mongoose.model("User", UserSchema);

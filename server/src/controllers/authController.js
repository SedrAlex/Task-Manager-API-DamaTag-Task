const User = require("../models/User.js");

const asyncHandler = require("express-async-handler");

//Register User
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Validation
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all the required fields.");
    }

    if (password.length < 8) {
      res.status(400);
      throw new Error("Password must be up to 8 characters.");
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("Email already in use.");
    }

    //  Create new user
    const user = await User.create({
      name,
      email,
      password,
    });
    //  Generate Token
    const token = user.generateJWT();

 
    if (user) {
      const { _id, name, email } = user;

      res.status(201).json({
        _id,
        name,
        email,
        token,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data.");
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});


exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validation
    if (!email || !password) {
      res.status(400);
      throw new Error("Please add an email and password.");
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404);
      throw new Error("User not found, Please sign up.");
    }
    const isPassword = user.checkPassword(password);

    if (!isPassword) {
      throw new Error("Password is incorrect");
    }

    const token = user.generateJWT();


    if (user && isPassword) {
      const { _id, name, email } = user;

      res.status(200).json({
        _id,
        name,
        email,
        token,
      });
    } else {
      res.status(500);
      throw new Error("Something went wrong, please try again.");
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

const User = require("../models/User.js")
const { BadRequestError, NotFoundError }  = require("../errors/custom-errors.js") ;

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  const token = user.generateJWT();
  res.status(201).json({ user: user.name, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new NotFoundError(`There's no user with the email: ${email}`);
  }

  const isPassword = user.checkPassword(password);

  if (!isPassword) {
    throw new BadRequestError("Password is incorrect");
  }

  const token = user.generateJWT();
  res.status(201).json({ user: user.name, token });
};


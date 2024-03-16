const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const protect = asyncHandler(async (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer")
    ) {
      throw new Error("Token not provided");
    }
      const token = req.headers.authorization.split(" ")[1];
      if (!token){
        res.status(401);
        throw new Error("Not authorized,please login.");
       }
      
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);

      //Get user id from token
      req.user = { name: decoded.name, userId: decoded.userId };

      next();
      console.log(req.user);


  } catch (error) {
    res.json({
      message: error.message,
    });
  }

});

module.exports = { protect };

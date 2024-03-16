const { StatusCodes }  = require("http-status-codes") ;

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || 500,
    message: err.message || `Something went wrong. Try again later.`,
  };

  // Handling Duplicate Email Error (Register route)
  if (err.code && err.code === 11000) {
    const email = err.keyValue.email;
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.message = `The email ${email} has been chosen by another client. Please provide a unique email. `;
  }

  // Handling Validation Error (Register route)
  if (err.name === "ValidationError") {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.message = Object.values(err.errors)
      .map((errObject) => errObject.message)
      .join(". ");
  }

  // Handling cast error
  if (err.name === "CastError") {
    customError.statusCode = StatusCodes.NOT_FOUND;
    customError.message = `Sorry. Task with id: ${err.value} doesn't exist`;
  }

  res.status(customError.statusCode).json({ message: customError.message });
};

module.exports =  {errorHandlerMiddleware};
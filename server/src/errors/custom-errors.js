const { StatusCodes }  = require("http-status-codes") ;

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class BadRequestError extends HttpError {
  statusCode = StatusCodes.BAD_REQUEST;
}

class NotFoundError extends HttpError {
  statusCode = StatusCodes.NOT_FOUND;
}

class UnauthorizedError extends HttpError {
  statusCode = StatusCodes.UNAUTHORIZED;
}

module.exports = {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    HttpError,
}
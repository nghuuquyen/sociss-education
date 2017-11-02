let BaseError = require('./BaseError');

class InvalidParamError extends BaseError {
  constructor(message, isPublic) {
    super(message, 400, isPublic);
  }
}

module.exports = NotFoundError;

let BaseError = require('./BaseError');

class NotFoundError extends BaseError {
  constructor(message, isPublic) {
    super(message, 404, isPublic);
  }
}

module.exports = NotFoundError;

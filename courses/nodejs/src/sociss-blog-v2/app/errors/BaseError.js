class BaseError extends Error {
  constructor(message, status, isPublic = true) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    Error.captureStackTrace(this, this.constructor.name);
  }
}

module.exports = BaseError;


const boom = require('boom');
const sendError = require('../utils/sendError');

// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, next) => {
  const { output: { statusCode }, message } = err.isBoom ? err : boom.badImplementation();
  sendError({ res, statusCode, message });
};

module.exports = errorMiddleware;


const boom = require('boom');
const sendError = require('../utils/sendError');

const { message, output: { statusCode } } = boom.notFound();

const notFoundMiddleware = (req, res) => sendError({ res, message, statusCode });

module.exports = notFoundMiddleware;

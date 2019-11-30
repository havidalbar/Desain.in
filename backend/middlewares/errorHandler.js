const { NODE_ENV } = require('../config');

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: NODE_ENV === 'production' ? {} : err.stack
  });
}

module.exports = {
  notFound,
  errorHandler
}
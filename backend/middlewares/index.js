const authHandlers = require('./authHandler'),
  errorHandlers = require('./errorHandler'),
  validation = require('./validation');

module.exports = {
  ...authHandlers,
  ...errorHandlers,
  ...validation
}
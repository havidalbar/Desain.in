const authHandlers = require('./authHandler'),
  errorHandlers = require('./errorHandler');

module.exports = {
  ...authHandlers,
  ...errorHandlers
}
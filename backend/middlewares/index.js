const authHandlers = require('./authHandler'),
  errorHandlers = require('./errorHandler'),
  storageHandlers = require('./google-cloud-storage'),
  validation = require('./validation');

module.exports = {
  ...authHandlers,
  ...errorHandlers,
  ...storageHandlers,
  ...validation
}
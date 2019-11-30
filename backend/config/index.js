const configConfigurations = require('./config');
const swaggerConfigurations = require('./swagger.json');

module.exports = { ...configConfigurations, swaggerConfigurations }
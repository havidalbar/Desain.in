const { DATABASE } = require('../config');
const knex = require('knex')({
  client: DATABASE.DB_DIALECT,
  connection: {
    host: DATABASE.DB_HOST,
    user: DATABASE.DB_USER,
    password: DATABASE.DB_PASS,
    database: DATABASE.DB_NAME,
    options: {
      port: 1433,
      encrypt: true
    }
  }
});

try {
  knex.raw('select 1+1 as result').then(function () {
    console.log("Connected Properly");
  });
}
catch (err) {
  console.log(err);
}

module.exports = knex
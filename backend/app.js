const express = require('express');


const app = express();

const { notFound, errorHandler } = require('./middlewares')
const { } = require('./routes')

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});


app.use(notFound);
app.use(errorHandler);

module.exports = app

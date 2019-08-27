const express = require('express');
const app = express();

require('./database')

const { NODE_ENV } = require('./config')
const { notFound, errorHandler } = require('./middlewares')
const authRouter = require('./routes/authRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app

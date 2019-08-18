const express = require('express');
const session = require('express-session')
const app = express();

require('./database')

const { NODE_ENV, SESSION_TOKEN } = require('./config')
const { notFound, errorHandler } = require('./middlewares')
const authRouter = require('./routes/authRoute')

let sessConfig = {
  secret: SESSION_TOKEN,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: NODE_ENV === 'production' ? true : false,
    maxAge: 1000 * 60 * 60 * 24 * 7, // set to 7 days cookies
  }
}

app.use(express.urlencoded({ extended: true }))
app.use(session(sessConfig))

app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app

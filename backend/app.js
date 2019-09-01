const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();
const knex = require('./database');

// database init
require('./database');

// config, error handler, & etc
const { NODE_ENV, swaggerConfigurations } = require('./config');
const { notFound, errorHandler } = require('./middlewares');

// Routes
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');
const contesRouter = require('./routes/contesRoute');
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfigurations));
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/contes',contesRouter);
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World'
  });
});
try{
knex.raw('select 1+1 as result').then(function () {
  console.log("Connected Properly");
});
}
catch (err){
  console.log(err);
}

// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app

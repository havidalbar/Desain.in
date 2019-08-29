const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerConf = require('./swagger.json');
const app = express();

require('./database')

const { NODE_ENV } = require('./config')
const { notFound, errorHandler } = require('./middlewares')

// Routes
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConf))
app.use('/auth', authRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app

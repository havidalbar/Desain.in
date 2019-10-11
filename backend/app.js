const express = require('express');
const swaggerUi = require('swagger-ui-express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//socket initialization

let chat = [];

server.listen(250);
io.on('connection', (socket) => {
  setInterval(() => {

    socket.emit('chat', chat);

  }, 1000)
  socket.on('sendMessage', function (data) {
    chat.push(data);
    socket.emit('chat', chat);
  });
});



// database init
require('./database');

// config, error handler, & etc
const { NODE_ENV, swaggerConfigurations } = require('./config');
const { notFound, errorHandler } = require('./middlewares');

// Routes
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');
const contestRouter = require('./routes/contestRoute');
const transactionRouter = require('./routes/transactionRoute');
const portfolioRouter = require('./routes/portfolioRoute');

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger(NODE_ENV === 'production' ? 'combined' : 'dev'));

// Endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfigurations));
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/contest', contestRouter);
app.use('/transaction', transactionRouter);
app.use('/portfolio', portfolioRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World'
  });
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app

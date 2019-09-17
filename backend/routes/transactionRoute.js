const express = require('express');
const router = express.Router();

const transtionController = require('../controllers/transactionController');
const { auth } = require('../middlewares');

router.post('/jualJasa', auth, transtionController.jualJasa);


module.exports = router
const express =require('express');
const router = express.Router();

const transController = require('../controllers/transacController');
const { auth } = require('../middlewares/index');

router.post('/jasa/beli', auth, transController.beliJasa);
router.post('/jasa/jual', auth, transController.jualJasa);
router.post('/step', auth, transController.doStep);
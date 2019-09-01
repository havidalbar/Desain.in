const express = require('express');
const router = express.Router();

const transController = require('../controllers/transacController');
const { auth } = require('../middlewares/index');

router.post('/jasa/beli', auth, transController.beliJasa);
router.post('/jasa/jual', auth, transController.jualJasa);
router.post('/step', auth, transController.doStep);
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Transaction Route"
  })
})

module.exports = router
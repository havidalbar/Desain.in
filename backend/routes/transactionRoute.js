const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');
const { auth, uploadFileToGCS } = require('../middlewares');

router.get('/kategori', transactionController.getKategori);
router.get('/tag', auth, transactionController.getAllTag);
router.get('/tag/:tag', auth, transactionController.getTag);

router.post('/jual', auth, transactionController.jualJasa);
router.post('/beli', auth, transactionController.beliJasa);
router.post('/deposit', auth, transactionController.depositJasa);

module.exports = router
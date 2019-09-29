const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');
const { auth, uploadFileToGCS } = require('../middlewares');

router.get('/getKategori', transactionController.getKategori);
router.get('/getTag', auth, transactionController.getAllTag);
router.get('/getTag/:tag', auth, transactionController.getTag);

router.post('/jualJasa', auth, transactionController.jualJasa);
router.post('/beliJasa', auth, transactionController.beliJasa);
router.put('/editJasaPaket', auth, transactionController.editJasaDesainer);


module.exports = router
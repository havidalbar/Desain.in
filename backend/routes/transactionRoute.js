const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');
const { auth } = require('../middlewares');

router.get('/getKategori', transactionController.getKategori);
router.get('/getTag', auth, transactionController.getTag);
router.get('/getTag/:tag', auth, transactionController.getTag);

router.post('/jualJasa', auth, transactionController.jualJasa);
router.post('/beliJasa', auth, transactionController.beliJasa);


module.exports = router
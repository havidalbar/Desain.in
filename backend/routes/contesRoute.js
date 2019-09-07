const express = require('express');
const router = express.Router();

const contesController = require('../controllers/contesController');
const { auth } = require('../middlewares/authHandler');

router.post('/buat', auth, contesController.buatKontes);
router.post('/gabung', auth, contesController.gabungKontes);
router.get('/', (req, res, next) => {
    res.json({
        message: "Contes Route"
    })
})

module.exports = router
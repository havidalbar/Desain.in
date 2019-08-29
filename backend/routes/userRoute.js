const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { auth } = require('../middlewares/authHandler');

/*
 * USER routes 
 */

router.post('/kontes/buat', auth, userController.buatKontes);
router.post('/kontes/gabung', auth, userController.gabungKontes);
router.post('/rekomendasi', userController.rekomendasi);
router.post('/portofolio/upload', auth, userController.uploadPortofolio);
router.post('/invitasi/terima', auth, userController.menerimaInvitasi);

/*
 * DESAINER routes 
 */

router.post('/invitasi/berikan', auth, userController.memberiInvitasi);

module.exports = router
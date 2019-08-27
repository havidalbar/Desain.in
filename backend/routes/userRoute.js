const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const auth = require('../middlewares/authHandler')

// router.get('/')

/*
 * USER routes 
 */

router.post('/kontes/buat', auth, userController.buatKontes)
router.post('/kontes/gabung', auth, userController.gabungKontes)
router.post('/jasa/beli', auth, userController.beliJasa)
router.post('/rekomendasi', userController.rekomendasi)
router.post('/portofolio/upload', auth, userController.uploadPortofolio)
router.post('/invitasi/terima', auth, userController.menerimaInvitasi)

/*
 * DESAINER routes 
 */

router.post('/jasa/jual', auth, userController.jualJasa)
router.post('/invitasi/berikan', auth, userController.memberiInvitasi)
router.post('/step', auth, userController.doStep)

module.exports = router
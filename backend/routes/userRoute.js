const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { auth, uploadFileToGCS } = require('../middlewares');

router.get('/profile/:userId', userController.getUserProfile)

router.post('/create_invitation/:userInvitedId', auth, userController.createInvitation);
router.post('/accept_invitation', auth, userController.acceptInvitation);

router.put('/update_password', auth, userController.updatePassword);

router.delete('/cancel_invitation', auth, userController.cancelInvitation);

module.exports = router
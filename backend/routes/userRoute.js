const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { auth, uploadFileToGCS } = require('../middlewares');

router.get('/profile/:userId', userController.getUserProfile)

router.post('/invitation/:userInvitedId/create', auth, userController.createInvitation);
router.post('/invitation/accept', auth, userController.acceptInvitation);

router.put('/update_password', auth, userController.updatePassword);

router.delete('/invitation/cancel', auth, userController.cancelInvitation);

module.exports = router
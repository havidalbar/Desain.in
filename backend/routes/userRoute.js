const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { auth } = require('../middlewares');

router.get('/profile/:userId', userController.getUserProfile)

router.post('/createInvitation/:userInvitedId', auth, userController.createInvitation);
router.post('/acceptInvitation', auth, userController.acceptInvitation);

router.put('/updatePassword', auth, userController.updatePassword);

router.delete('/cancelInvitation', auth, userController.cancelInvitation);

module.exports = router
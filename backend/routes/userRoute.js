const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { auth } = require('../middlewares/index');


router.get('/updatePassword/:userId',auth,userController.updatePassword);


module.exports = router
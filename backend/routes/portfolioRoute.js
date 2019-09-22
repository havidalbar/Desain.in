const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolioController');
const { auth, uploadFileToGCS } = require('../middlewares');

router.get('/getByUserId/:userId', portfolioController.getByUserId);
router.get('/getPortfolioDetailById/:postId', portfolioController.getDetailById);

router.post('/uploadImage', auth, portfolioController.uploadImage);
router.post('/uploadData', auth, portfolioController.uploadData);

router.put('/updateData', auth, portfolioController.updateData);

router.delete('/deletePortfolioById/:postId', auth, portfolioController.deleteById);

module.exports = router

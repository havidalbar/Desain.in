const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolioController');
const { auth } = require('../middlewares');

router.get('/', portfolioController.portfolio);
router.get('/getByUserId', portfolioController.getByUserId);
router.get('/getPortfolioDetailById', portfolioController.getDetailById);

router.post('/uploadImage', auth, portfolioController.uploadImage);
router.post('/uploadData', auth, portfolioController.uploadData);

router.put('/updateData', auth, portfolioController.updateData);

router.delete('/deletePortfolioById', auth, portfolioController.deleteById);

module.exports = router

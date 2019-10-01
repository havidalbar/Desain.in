const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolioController');
const { auth, upload, uploadFileToGCS, imageValidation } = require('../middlewares');

router.get('/:userId', portfolioController.getByUserId);
router.get('/:postId/detail', portfolioController.getDetailById);

router.post('/upload_image', auth, upload.single('image'), imageValidation, uploadFileToGCS, portfolioController.uploadImage);
router.post('/upload_data', auth, portfolioController.uploadData);

router.put('/update_data', auth, portfolioController.updateData);

router.delete('/:postId', auth, portfolioController.deleteById);

module.exports = router

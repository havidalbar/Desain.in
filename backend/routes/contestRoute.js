const express = require('express');
const router = express.Router();

const contestController = require('../controllers/contestController');
const { auth, uploadFileToGCS } = require('../middlewares');

router.get('/', contestController.contest);
router.get('/:contestId', contestController.getContestById);
router.get('/user', contestController.getContestByUser);
router.get('/hot', contestController.getHotContest);

router.post('/create', auth, contestController.createContest);
router.post('/join/:contestId', auth, contestController.joinContest);

module.exports = router
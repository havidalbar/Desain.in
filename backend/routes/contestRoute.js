const express = require('express');
const router = express.Router();

const contestController = require('../controllers/contestController');
const { auth } = require('../middlewares');

router.get('/', contestController.contest);
router.get('/getContestByUserId', contestController.getContestById);
router.get('/getContestByUser', contestController.getContestByUser);
router.get('/getHotContest', contestController.getHotContest);

router.post('/createContest', auth, contestController.createContest);
router.post('/joinContest', auth, contestController.joinContest);

module.exports = router
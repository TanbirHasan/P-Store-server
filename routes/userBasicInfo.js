const express = require('express');
const { addUserBasicInfo, getUserBasicInfo } = require('../controllers/userBasicInfo');
const router = express.Router();

router.post('/', addUserBasicInfo);
router.get('/:email', getUserBasicInfo);

module.exports = router;

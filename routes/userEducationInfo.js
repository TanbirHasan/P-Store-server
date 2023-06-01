const express = require('express');
const { addUserEducationInfo, getUserEducationInfo } = require('../controllers/userEducationInfo');

const router = express.Router();

router.post('/', addUserEducationInfo);
router.get('/:email', getUserEducationInfo);

module.exports = router;

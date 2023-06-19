const express = require('express');
const { addUserBasicInfo, getUserBasicInfo } = require('../controllers/userBasicInfo');
const router = express.Router();

router.put('/:email', addUserBasicInfo);
router.get('/:email', getUserBasicInfo);

module.exports = router;

const express = require('express');
const { addUserSkills, getUserSkills } = require('../controllers/userSkills');

const router = express.Router();

router.post('/', addUserSkills);
router.get('/:email', getUserSkills);

module.exports = router;

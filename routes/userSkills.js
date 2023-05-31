const express = require('express');
const { addUserSkills, getUserSkills } = require('../controllers/userSkills');

const router = express.Router();

router.put('/:email', addUserSkills);
router.get('/:email', getUserSkills);

module.exports = router;

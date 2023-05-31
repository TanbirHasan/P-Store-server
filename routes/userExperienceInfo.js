const express = require('express');
const {
	addUserExperienceInfo,
	getUserExperienceInfo,
} = require('../controllers/userExperienceInfo');

const router = express.Router();

router.post('/', addUserExperienceInfo);
router.get('/:email', getUserExperienceInfo);

module.exports = router;

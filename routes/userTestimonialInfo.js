const express = require('express');
const {
	addUserTestimonial,
	getUserTestimonialInfo,
} = require('../controllers/userTestimonialInfo');

const router = express.Router();

router.post('/', addUserTestimonial);
router.get('/:email', getUserTestimonialInfo);

module.exports = router;

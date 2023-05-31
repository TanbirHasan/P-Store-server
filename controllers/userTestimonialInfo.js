const UserTestimonial = require('../models/userTestimonialInfo');

const addUserTestimonial = async (req, res) => {
	try {
		const testimonial = req.body;
		const result = await UserTestimonial.create(testimonial);
		res.send({ status: 'success', result });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

const getUserTestimonialInfo = async (req, res) => {
	try {
		const email = req.params.email;
		const info = await UserTestimonial.find({ userEmail: email });
		res.send({ status: 'success', data: info });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

module.exports = {
	addUserTestimonial,
	getUserTestimonialInfo,
};

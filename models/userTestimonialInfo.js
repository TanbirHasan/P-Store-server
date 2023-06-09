const { default: mongoose } = require('mongoose');

const userTestimonialInfo = new mongoose.Schema(
	{
		userEmail: {
			required: true,
			type: String,
		},
		recommenderName: {
			type: String,
			required: true,
		},
		recommenderDesignation: {
			type: String,
			required: true,
		},
		recommendation: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User_Testimonial_Info', userTestimonialInfo);

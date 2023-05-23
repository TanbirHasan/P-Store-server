const { default: mongoose } = require('mongoose');

const userTestimonialInfo = new mongoose.Schema(
	{
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

module.exports = mongoose.model('user_TestimonialInfo', userTestimonialInfo);

const mongoose = require('mongoose');

const userExperienceInfo = new mongoose.Schema(
	{
		userEmail: {
			required: true,
			type: String,
		},
		position: {
			type: String,
			required: true,
		},
		employmentType: {
			type: String,
			required: true,
		},
		companyName: {
			type: String,
			required: true,
		},
		companyLocation: {
			type: String,
			required: true,
		},
		jobType: {
			type: String,
			required: true,
		},
		startDate: {
			type: String,
			required: true,
		},
		endDate: {
			type: String,
			// required: true,
		},
		description: {
			type: String,
			required: true,
		},
		showEndDate: {
			type: Boolean,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('user_experience_info', userExperienceInfo);

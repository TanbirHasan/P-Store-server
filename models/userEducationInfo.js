const mongoose = require('mongoose');

const userEducationInfo = new mongoose.Schema(
	{
		userEmail: {
			required: true,
			type: String,
		},
		instituteName: {
			type: String,
			required: true,
		},
		degree: {
			type: String,
			required: true,
		},
		fieldOfStudy: {
			type: String,
			required: true,
		},
		grade: {
			type: String,
			// required: true,
		},
		startDate: {
			type: String,
			required: true,
		},
		endDate: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User_Education_Info', userEducationInfo);

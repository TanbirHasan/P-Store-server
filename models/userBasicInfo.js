const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const userBasicInfo = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			// unique: true,
		},
		image: {
			type: Array,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		phone: {
			type: Number,
			required: true,
		},
		about: {
			type: String,
			required: true,
		},
		linkedin: {
			type: String,
			// required:true,
		},
		facebook: {
			type: String,
			// required:true,
		},
		skype: {
			type: String,
			// required:true,
		},
		youtube: {
			type: String,
			// required:true,
		},
		isLinkedinActive: {
			type: String,
			// required:true,
		},
		isFacebookActive: {
			type: String,
			// required:true,
		},
		isSkypeActive: {
			type: String,
			// required:true,
		},
		isYoutubeActive: {
			type: String,
			// required:true,
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('User_Basic_Info', userBasicInfo);

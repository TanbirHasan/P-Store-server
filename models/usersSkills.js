const { default: mongoose } = require('mongoose');

const userSkill = new mongoose.Schema({
	skills: {
		type: [String],
		required: true,
	},
	strengthValue: {
		type: Number,
	},
},{timestamps:true});

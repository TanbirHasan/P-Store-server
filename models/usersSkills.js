const { default: mongoose } = require('mongoose');

const userSkill = new mongoose.Schema(
	{
		userEmail: {
			default: 'sajid@gmail.com',
			type: String,
		},
		skills: {
			type: [String],
			required: true,
		},
		strengthValue: {
			type: Number,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User_Skill', userSkill);

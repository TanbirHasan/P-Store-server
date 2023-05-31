const UserSkills = require('../models/usersSkills');

const addUserSkills = async (req, res) => {
	try {
		const email = req.params.email;
		const skills = req.body;
		const filter = { userEmail: email };
		const options = { upsert: true };
		const result = await UserSkills.updateOne(filter, skills, options);
		res.send({ status: 'success', result });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

const getUserSkills = async (req, res) => {
	try {
		const email = req.params.email;
		const skills = await UserSkills.find({ userEmail: email });
		res.send({ status: 'success', data: skills });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

module.exports = {
	addUserSkills,
	getUserSkills,
};

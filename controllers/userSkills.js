const UserSkills = require('../models/usersSkills');

const addUserSkills = async (req, res) => {
	try {
		const skills = req.body;
		const result = await UserSkills.create(skills);
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
    getUserSkills
};

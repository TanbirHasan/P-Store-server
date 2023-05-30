const ExperienceInfo = require('../models/userExperienceInfo');

const addUserExperienceInfo = async (req, res) => {
	try {
		const info = req.body;
		const result = ExperienceInfo.create(info);
		res.send(result);
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

const getUserExperienceInfo = async (req, res) => {
	try {
		const email = req.params.email;
		const info = await ExperienceInfo.find({ userEmail: email });
		res.send({ status: 'success', data: info });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

module.exports = {
	addUserExperienceInfo,
	getUserExperienceInfo,
};

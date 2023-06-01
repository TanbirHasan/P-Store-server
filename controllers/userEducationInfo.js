const EducationInfo = require('../models/userEducationInfo');

const addUserEducationInfo = async (req, res) => {
	try {
		const info = req.body;
		const result = await EducationInfo.create(info);
		res.send({ status: 'success', result });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

const getUserEducationInfo = async (req, res) => {
	try {
		const email = req.params.email;
		const info = await EducationInfo.find({ userEmail: email });
		res.send({ status: 'success', data: info });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

module.exports = {
	addUserEducationInfo,
	getUserEducationInfo,
};

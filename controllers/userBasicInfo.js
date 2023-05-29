const BasicUserInfo = require('../models/userBasicInfo');

const addUserBasicInfo = async (req, res) => {
	try {
		const info = req.body;
		const result = BasicUserInfo.create(info);
		res.send({ status: 'success', result });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

const getUserBasicInfo = async (req, res) => {
	try {
		const email = req.params.email;
		const info = await BasicUserInfo.findOne({ email: email });
		res.send({ status: 'success', data:info });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

module.exports = {
	addUserBasicInfo,
	getUserBasicInfo,
};

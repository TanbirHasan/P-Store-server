const BasicUserInfo = require('../models/userBasicInfo');

const addUserBasicInfo = async (req, res) => {
	try {
		const email = req.params.email;
		const info = req.body;
		const filter = { email: email };
		const options = { upsert: true };
		const result = await BasicUserInfo.updateOne(filter, info, options);
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
		res.send({ status: 'success', data: info });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

module.exports = {
	addUserBasicInfo,
	getUserBasicInfo,
};

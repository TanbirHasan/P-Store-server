
const bcrypt = require('bcrypt');
const user = require('../models/user');


const handleNewUser = async (req, res) => {
    const { username,email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'Email and password are required.' });

   
    const duplicate = await user.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409); 

    try {

        const hashedPwd = await bcrypt.hash(password, 10);

  
        const result = await user.create({
            "username":username,
            "email": email,
            "password": hashedPwd
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${username} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };
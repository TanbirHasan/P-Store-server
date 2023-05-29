const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const mongoose = require('mongoose');
const connectDB = require('./DB/connectDB');
const dotenv = require('dotenv').config();

// middlewares

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('Route is working');
});

// middleware to set router

app.use('/api/v1/usersBasicInfo', require('./routes/userBasicInfo'));


// Start Server and Connect to DB

const start = async () => {
	try {
		await connectDB(process.env.DATABASE);
		app.listen(PORT, () => {
			console.log(`App is running on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};
start();

module.exports = app;

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const mongoose = require('mongoose');
const connectDB = require('./DB/connectDB');
const dotenv =  require("dotenv").config()
const registerRoutes = require('./routes/register')
const loginRoutes = require('./routes/login')

// middlewares

app.use(express.json());
app.use(cors());


// routes


app.use('/api/v1/register',registerRoutes );
app.use('/api/v1/login', loginRoutes);

app.get('/', (req, res) => {
	res.send('Route is working');
});


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

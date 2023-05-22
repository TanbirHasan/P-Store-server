const mongoose = require('mongoose');

const dotenv = require('dotenv').config();

const port = process.env.PORT || 8000;


const app = require('./app');



// const start = async () => {
//   conn
// }

// const start = async () => {
// 	try {
// 		await connectDB('mongodb://127.0.0.1:27017/test');
// 		app.listen(PORT, () => {
// 			console.log(`${PORT} is connected`);
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
// start();


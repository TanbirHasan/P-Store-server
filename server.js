const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

const app = require("./app");

// data base connection

async function dbConncet() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Database is connected")
  } catch (err) {
    console.log(err);
  }
}
dbConncet();

// server

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

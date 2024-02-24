const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to the database');
  } catch (error) {
    console.log('Fail to connect to database');
  }
};

module.exports = { connectDB };

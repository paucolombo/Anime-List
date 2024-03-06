const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db =
      'mongodb+srv://anime:llNl5ZlmtkpgJoIy@cluster.gr9dup6.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(db);
    console.log('Connected to the database');
  } catch (error) {
    console.log('Fail to connect to database ');
  }
};

module.exports = { connectDB };

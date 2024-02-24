require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const animeRouter = require('./src/api/routes/anime');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.use('/api/v1/anime', animeRouter);
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not Found');
});

app.listen(3000, () => {
  console.log('Server up in port 3000');
});

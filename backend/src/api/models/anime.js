const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: {
      type: Array,
      required: true,
    },
    episodes: { type: Number, required: true },
    seen: {
      type: String,
      enum: ['Yes, completed 💪😁', 'Not yet 😔', 'Still Watching it 🖥️'],
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'anime',
  }
);

const Anime = mongoose.model('anime', animeSchema, 'anime');
module.exports = Anime;

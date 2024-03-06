const Anime = require('../models/anime');

const getAnime = async (req, res, next) => {
  try {
    const anime = await Anime.find();
    return res.status(200).json(anime);
  } catch (error) {
    return res.status(400).json('Error in the request');
  }
};
const getAnimeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const anime = await Anime.findById(id);
    return res.status(200).json(anime);
  } catch (error) {
    return res.status(400).json('Error in the request');
  }
};
const getAnimeByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const anime = await Anime.find({ category });
    return res.status(200).json(anime);
  } catch (error) {
    return res.status(400).json('Error in the request');
  }
};
const postAnime = async (req, res, next) => {
  try {
    const newAnime = new Anime(req.body);
    const animeSaved = await newAnime.save();
    return res.status(201).json(animeSaved);
  } catch (error) {
    console.log('error ', error);
    return res.status(400).json('Error in the request');
  }
};
const postAllAnime = async (req, res, next) => {
  try {
    const animeList = await Promise.all(
      req.body.map(async (anime) => {
        console.log('ANIME ', anime);
        const newAnime = await new Anime(anime);
        const animeSaved = await newAnime.save();
        return animeSaved;
      })
    );
    return res.status(201).json(animeList);
  } catch (error) {
    console.log('error ', error);
    return res.status(400).json('Error in the request');
  }
};

const putAnime = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newAnime = new Anime(req.body);
    newAnime._id = id;
    const animeUpdated = await Anime.findByIdAndUpdate(id, newAnime, {
      new: true,
    });
    return res.status(200).json(animeUpdated);
  } catch (error) {
    console.log('error ', error);
    return res.status(400).json('Error in the request');
  }
};
const deleteAnime = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAnime = await Anime.findByIdAndDelete(id);
    return res.status(200).json(deletedAnime);
  } catch (error) {
    return res.status(400).json('Error in the request');
  }
};
module.exports = {
  getAnime,
  postAnime,
  getAnimeByCategory,
  getAnimeById,
  putAnime,
  deleteAnime,
  postAllAnime,
};

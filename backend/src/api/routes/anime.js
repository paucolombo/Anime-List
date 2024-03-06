const {
  getAnime,
  getAnimeByCategory,
  getAnimeById,
  putAnime,
  postAnime,
  deleteAnime,
  postAllAnime,
} = require('../controllers/anime');
const animeRouter = require('express').Router();
module.exports = animeRouter;

animeRouter.get('/category/:category', getAnimeByCategory);
animeRouter.get('/:id', getAnimeById);
animeRouter.get('/', getAnime);
animeRouter.delete('/:id', deleteAnime);
animeRouter.put('/:id', putAnime);
animeRouter.post('/load_bdd', postAllAnime);
animeRouter.post('/', postAnime);

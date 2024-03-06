import Card from 'frontend/components/Card';
import { BACKUP_BDD } from 'frontend/src/backup_bdd';

const getAnimeList = async () => {
  try {
    let data = await fetch(
      'https://anime-list-pi.vercel.app/api/v1/anime'
    ).then((res) => res.json());
    if (data.length === 0) {
      data = await postBackupAnime();
    }
    showContent(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
getAnimeList();

const postBackupAnime = async () => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(BACKUP_BDD), // Convierte el array a formato JSON
    };
    let data = await fetch(
      'https://anime-list-pi.vercel.app/api/v1/anime/load_bdd',
      options
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

const showContent = (data) => {
  const h1 = document.createElement('h1');
  h1.innerText = 'My Anime List';
  document.body.appendChild(h1);
  const main = document.createElement('main');
  document.body.appendChild(main);
  const animeList = data.map((anime) => {
    Card(anime);
  });
};

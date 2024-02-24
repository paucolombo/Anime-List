import Card from './components/Card';
const getAnimeList = async () => {
  try {
    let data = await fetch('http://localhost:3000/api/v1/anime/').then((res) =>
      res.json()
    );
    showContent(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
getAnimeList();

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

const Card = (anime) => {
  const div = document.createElement('div');
  const main = document.querySelector('main');
  const categoryList = anime.category.join(', ');
  const deleteAnime = async () => {
    try {
      let data = await fetch(
        `https://anime-list-pi.vercel.app/api/v1/anime/${anime._id}`,
        {
          method: 'DELETE',
        }
      ).then((res) => res.json());
      console.log('Anime Deleted!');
      location.reload();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  div.classList.add('animeCard');
  div.innerHTML = `
      <div class="cardContainer">
      <h2>${anime.name}</h2>
      <img class="imgCard" src=${anime.image} alt=${anime.name}>
      <span> ${categoryList}</span>
      <span>Episodes: ${anime.episodes}</span>
      <span>Have i seen it? ${anime.seen}</span>
      <button id=delete-${anime._id} class="deleteButton">Delete Anime </button>
     </div>
  `;
  main.appendChild(div);
  const button = document.querySelector(`#delete-${anime._id}`);
  button.addEventListener('click', deleteAnime);
};
export default Card;

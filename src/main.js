import { ghibliData } from './data.js';

// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(ghibliData);

const movieList = ghibliData();
const movieContainer = document.querySelector('#movie-container');

console.log(movieList);

for (let i = 0; i < movieList.length; i++) {
  const moviePosters = `<img class="movie-poster" src="${movieList[i].poster}" alt="${movieList[i].title} poster" />`
  movieContainer.innerHTML += moviePosters;
}
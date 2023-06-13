import { ghibliData } from './data.js';
import { sortMovies } from './data.js';

// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(ghibliData);
console.log(sortMovies);

const movieList = ghibliData();
const movieContainer = document.querySelector('#movie-container');
const orderTypes = document.querySelector('#movie-filters');

const showMovies= function() {
  for (let i = 0; i < movieList.length; i++) {
  const moviePosters = `<figure class="movie-poster"><img class="poster-img" src="${movieList[i].poster}" alt="${movieList[i].title} poster" /><figcaption class="img-caption">${movieList[i].title}</figcaption></figure>`
  movieContainer.innerHTML += moviePosters;
  };
};

showMovies();

orderTypes.addEventListener("change", function() {
  document.getElementById('movie-container').innerHTML = '';
  const orderSelect = document.querySelector("#movie-filters").value;
  const sortSelected = sortMovies.sortOrder(orderSelect, movieList);
  console.log(sortSelected);
  showMovies();
});
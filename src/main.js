// ==============================================
// Imports of ghibliData and sortMovies function
// ==============================================

import { ghibliData } from './data.js';
import { sortMovies } from './data.js';

console.log(ghibliData);
console.log(sortMovies);

// =====================================
// DOM selectors & movie posters display
// =====================================

const movieList = ghibliData();
const movieContainer = document.querySelector('#movie-container');
const orderTypes = document.querySelector('#movie-sort');
const filterTypes = document.querySelector('#movie-filter');
console.log(filterTypes);

const showMovies= function() {
  for (let i = 0; i < movieList.length; i++) {
  const moviePosters = `<figure class="movie-poster"><img class="poster-img" src="${movieList[i].poster}" alt="${movieList[i].title} poster" /><figcaption class="img-caption">${movieList[i].title} (${movieList[i].release_date})</figcaption></figure>`
  movieContainer.innerHTML += moviePosters;
  };
};

showMovies();

// =====================
// Select element events
// =====================

orderTypes.addEventListener("change", function() {
  document.getElementById('movie-container').innerHTML = '';
  const orderSelect = document.querySelector("#movie-sort").value;
  const alphabeticalSort = sortMovies.sortOrder(orderSelect, movieList);
  console.log(alphabeticalSort);
  const yearSort = sortMovies.sortOrder(orderSelect, movieList);
  console.log(yearSort);
  showMovies();
});

filterTypes.addEventListener("change", function() {
  document.getElementById('movie-container').innerHTML = '';
});
// ==============================================
// Imports of ghibliData and sortMovies function
// ==============================================

import { ghibliData } from './data.js';
import { sortMovies } from './data.js';
import { filterMovies } from './data.js';

console.log(ghibliData);
console.log(sortMovies);
console.log(filterMovies);

// =====================================
// DOM selectors & movie posters display
// =====================================

const movieList = ghibliData();
const movieContainer = document.querySelector('#movie-container');
const orderTypes = document.querySelector('#movie-sort');
const filterTypes = document.querySelector('#movie-filter');
const refreshBtn = document.querySelector('#refresh-btn');
console.log(filterTypes);

const showMovies = function(dataMovie) {
  for (let i = 0; i < dataMovie.length; i++) {
    const moviePosters = `<div class="movie-card"><h2 class="title">${dataMovie[i].title}</h2><div class="poster-description"><img src="${dataMovie[i].poster}" class="poster-img" /><div class="info"><h3 class="subtitle">Synopsis</h3><p class="description">"${dataMovie[i].description}"</p><p class="data"><span class="bold">Directed by: </span>${dataMovie[i].director}</p><p class="data"><span class="bold">Produced by: </span>${dataMovie[i].producer}</p></div></div></div>` 
    movieContainer.innerHTML += moviePosters;
  }
};

showMovies(movieList);

refreshBtn.addEventListener("click", function() {
  window.location.reload();
});

// ==============================
// Select element events (filter)
// ==============================

filterTypes.addEventListener("change", function() {
  document.getElementById('movie-container').innerHTML = '';
  const filterSelect = document.querySelector('#movie-filter').value;
  const directorFilter = filterMovies.filterDirectors(filterSelect, movieList);
  console.log(directorFilter);
  showMovies(directorFilter);
});

// ============================
// Select element events (sort)
// ============================

orderTypes.addEventListener("change", function() {
  document.getElementById('movie-container').innerHTML = '';
  const orderSelect = document.querySelector('#movie-sort').value;
  if (orderSelect === "asc-alphabet" || orderSelect === "desc-alphabet") {
    const movieSortAlphabet = sortMovies.sortOrder(movieList, 'title', orderSelect);
    return showMovies(movieSortAlphabet);
  } else if (orderSelect === "asc-year" || orderSelect === "desc-year") {
    const movieSortYear = sortMovies.sortOrder(movieList, 'release_date', orderSelect);
    return showMovies(movieSortYear);
  }
});
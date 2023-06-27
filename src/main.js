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

const showMovies= function(dataMovie) {
  for (let i = 0; i < dataMovie.length; i++) {
    const moviePosters = `<figure class="movie-poster"><img class="poster-img" src="${dataMovie[i].poster}" alt="${dataMovie[i].title} poster" /><figcaption  class="img-caption">${dataMovie[i].title} (${dataMovie[i].release_date})</figcaption></figure>`
    movieContainer.innerHTML += moviePosters;
  }
};

showMovies(movieList);

refreshBtn.addEventListener("click", function() {
  window.location.reload();
})

// ==============================
// Select element events (filter)
// ==============================

filterTypes.addEventListener("change", function() {
  document.getElementById('movie-container').innerHTML = '';
  const filterSelect = document.querySelector('#movie-filter').value;
  const directorFilter = filterMovies.filterDirectors(filterSelect, movieList);
  console.log(directorFilter)
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
  // showMovies(movieList);
});
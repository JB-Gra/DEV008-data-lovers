// ================================================
// Import of ghibli object and export of ghibliData
// ================================================

import data from './data/ghibli/ghibli.js'

export const ghibliData = () => {
  return data.films;
};

// ===========================
// Filter function by director
// ===========================

export const filterMovies =  {
  filterDirectors: function (optionValue, movies) {
    const directorFilter = movies.filter(movie => movie.director.includes(optionValue));
    return directorFilter;
  }
};

// ========================================================
// Sorting function by alphabetical order & year of release
// ========================================================

export const sortMovies = {
  sortOrder: function (orderSelect, movies) {
    if (orderSelect === "alphabet-descending") {
      // a[sortBy] < b[sortBy]
      movies.sort(function (a, b) {
        if (a.title.replace(/^The /, "") < b.title.replace(/^The /, "")) {
          return -1;
        }
        if (a.title.replace(/^The /, "") > b.title.replace(/^The /, "")) {
          return 1;
        }
        return 0;
      })
      return movies;
    }
    if (orderSelect === "alphabet-ascending") {
      movies.sort(function (a, b) {
        if (a.title.replace(/^The /, "") > b.title.replace(/^The /, "")) {
          return -1;
        }
        if (a.title.replace(/^The /, "") < b.title.replace(/^The /, "")) {
          return 1;
        }
        return 0;
      })
      return movies;
    }
    if (orderSelect === "year-descending") {
      movies.sort(function (a, b) {
        if (a.release_date < b.release_date) {
          return -1;
        }
        if (a.release_date > b.release_date) {
          return 1;
        }
        return 0;
      })
      return movies;
    }
    if (orderSelect === "year-ascending") {
      movies.sort(function (a, b) {
        if (a.release_date > b.release_date) {
          return -1;
        }
        if (a.release_date < b.release_date) {
          return 1;
        }
        return 0;
      })
      return movies;
    }
  }
};
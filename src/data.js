// ================================================
// Import of ghibli object and export of ghibliData
// ================================================

import data from './data/ghibli/ghibli.js'

export const ghibliData = () => {
  return data.films;
};

// ========================================================
// Sorting function by alphabetical order & year of release
// ========================================================

export const sortMovies = {
  sortOrder: function (orderSelect, movies) {
    if (orderSelect === "alphabet-descending") {
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
      };
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
      };
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

// ===========================
// Filter function by director
// ===========================
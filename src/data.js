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
  sortOrder: function (movies, sortBy, sortOrder) {
    movies.sort((a,b) => {
      let compare = 0;
      
      if (a[sortBy] > b[sortBy]) {
        compare = 1;
      } else if (a[sortBy] < b[sortBy]) {
        compare = -1;
      }
      if (sortOrder === "desc-year" || sortOrder === "desc-alphabet") {
        compare *= -1;
      }

      return compare;
    })

    return movies;
  }
};
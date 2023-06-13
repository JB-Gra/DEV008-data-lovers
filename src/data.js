import data from './data/ghibli/ghibli.js'

export const ghibliData = () => {
  return data.films;
};

// ~ Función de filtrado ~

export const sortMovies = {
  sortOrder: function (orderSelect, movies) {
    if (orderSelect === "sort-descending") {
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
    if (orderSelect === "sort-ascending") {
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
  }
};

// estas funciones son de ejemplo

// export const anotherExample = () => {
//   return 'OMG';
// };
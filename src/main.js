<<<<<<< HEAD
import { database } from './data.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(database, data);
=======
import { getFilms } from './data.js';

const films = getFilms();
console.log(films);
const filmsContainer = document.getElementById('films-container');
const filmList = films.map(film => { //para que para todas las peliculas me retorne lo mismo, en este caso es el titulo, la foto y el año
    return `
      <div>
        <h2>${film.title}</h2>
        <img src="${film.poster}" alt="${film.title} Poster">
        <p>${film.release_date}</p>
        </div>
        `;
      }).join(''); //el resultado de .map() es un array de fragmentos HTML. Para mostrarlos correctamente en la interfaz, necesitamos combinarlos en una sola cadena de texto. Es aquí donde entra en juego el método .join('').
    
      // Agrega el contenido HTML al elemento <div>
    filmsContainer.innerHTML = filmList; //para meterle al div la lista que hicimos.
>>>>>>> origin

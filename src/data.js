import ghibliData from './data/ghibli/ghibli.js'; 
// Obtenemos la base de datos y la llamamos como un objeto ghibliData.
export const getFilms = () => { 
  // Devuelve la lista de películas del objeto ghibliData.
  return ghibliData.films;
};
// Estas funciones son de ejemplo
// export const database = () => {
//  return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

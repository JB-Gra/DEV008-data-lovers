import ghibliData from './data/ghibli/ghibli.js'; 
//obtenemos la base de datos y la llamamos como un objeto ghibliData.
export const getFilms = () => { 
  /* devuelve la lista de películas del objeto ghibliData.*/
  return ghibliData.films;
};
/*estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

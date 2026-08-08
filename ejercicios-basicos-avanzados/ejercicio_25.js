////////////////////////////////////////// EJERCICIO 25 //////////////////////////////////////////
/*
Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 25 //////////////////////////////////////////");

const moviesOld = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

let countPelisViejas = 0;
let countPelisNuevas = 0;

moviesOld.forEach((peli) => {if (peli.releaseYear < 2000)
    countPelisViejas++});

console.log("Total de Pelis Viejas->", countPelisViejas);


moviesOld.forEach((peli) => {if (peli.releaseYear > 2000)
    countPelisNuevas++});

console.log("Total de Pelis Nuevas->", countPelisNuevas);
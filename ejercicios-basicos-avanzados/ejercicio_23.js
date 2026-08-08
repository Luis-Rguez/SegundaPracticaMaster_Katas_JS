////////////////////////////////////////// EJERCICIO 23 //////////////////////////////////////////
/*
Usa un bucle para crear 3 arrays de películas filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 23 //////////////////////////////////////////");

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

let peliculaPequenia = [];
let peliculaMediana = [];
let peliculaGrande = [];

peliculaPequenia = movies.filter((movie) => movie.durationInMinutes < 100);
peliculaMediana = movies.filter((movie) => (movie.durationInMinutes >= 100) && (movie.durationInMinutes < 200));
peliculaGrande = movies.filter((movie) => (movie.durationInMinutes >= 200));

console.log("Listado de Peliculas Pequeñas ->");
peliculaPequenia.forEach((pelicula) => console.log(pelicula["name"]));

console.log("\nListado de Peliculas Medianas ->");
peliculaMediana.forEach((pelicula) => console.log(pelicula["name"]));

console.log("\nListado de Peliculas Grandes ->");
peliculaGrande.forEach((pelicula) => console.log(pelicula["name"]));
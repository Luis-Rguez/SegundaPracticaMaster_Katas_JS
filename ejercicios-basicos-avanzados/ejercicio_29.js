////////////////////////////////////////// EJERCICIO 29 //////////////////////////////////////////
/*
Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 29 //////////////////////////////////////////");

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

let filmDecadaStarWars = [];
let fechaActual = 2026;

function anadirPelicula(inicioDecada, moviesDecada)
{    
    let starWars = {
        decada: inicioDecada,
        peliculas: moviesDecada
    };

    filmDecadaStarWars.push(starWars);
}

function filtrarDecada(inicioDecada, finDecada)
{
    let moviesDecada = starWarsMovies.filter((movie) => (movie.releaseYear >= inicioDecada && movie.releaseYear < finDecada));
    anadirPelicula(inicioDecada, moviesDecada);
}

for(let fechaInicio = 1970; fechaInicio < fechaActual; fechaInicio += 10)
{
    filtrarDecada(fechaInicio, fechaInicio + 10);
}

for (const decada of filmDecadaStarWars)
{
    console.log(decada);
    console.log("-----------------------------");
}
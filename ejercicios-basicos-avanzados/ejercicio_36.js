////////////////////////////////////////// EJERCICIO 36 //////////////////////////////////////////
/*
Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 36 //////////////////////////////////////////");

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

anioActucal = 2026;

function calculateActorsAges(actors)
{
    let edad = 0;
    let yearsActor = [];

    for(let actor of actors)
    {
        edad = anioActucal - actor.born;
        actor.years = edad;
        yearsActor.push(actor);
    }

    return yearsActor
}

console.log(calculateActorsAges(actors));
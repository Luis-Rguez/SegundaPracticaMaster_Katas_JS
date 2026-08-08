////////////////////////////////////////// EJERCICIO 8 //////////////////////////////////////////
/*
Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 8 //////////////////////////////////////////");

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

let palabraLarga = "";


function findLongestWord(avengers)
{
    for(let heroe of avengers )
    {
        if(heroe.length > palabraLarga.length )
        {
            palabraLarga = heroe;
        }
    }

    return palabraLarga;
}

console.log("El 1º nombre mas largo de la lista de los Avengers es el HEROE-> " + findLongestWord(avengers));
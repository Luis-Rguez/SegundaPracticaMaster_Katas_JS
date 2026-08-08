////////////////////////////////////////// EJERCICIO 33 //////////////////////////////////////////
/*
Desarrolla una función que reciba un país por parámetro y devuelva su capital.
La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 33 //////////////////////////////////////////");

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country)
{
    for(let countryFind in capitals)
    {
        if(countryFind === country)
        {
            return "La capital de " + country + " es " + capitals[countryFind];
        }
    }

    return "Lo sentimos, ese pais no se encuentra en la lista"
}

country = "Italy";

console.log(getCapital(country));
console.log(getCapital("Japan"));
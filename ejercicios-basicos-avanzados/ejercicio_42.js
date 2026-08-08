////////////////////////////////////////// EJERCICIO 42 //////////////////////////////////////////
/*
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 42 //////////////////////////////////////////");

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

let indice1 = 0;
let indice2 = 3;

console.log(fantasticFour);

function swap(index1, index2)
{
    if((index1 >=0 && index1 < fantasticFour.length) && (index2 >=0 && index2 < fantasticFour.length))
    {
        let elemento = fantasticFour[index1];

        fantasticFour.splice(index1, 1, fantasticFour[index2]);
        fantasticFour.splice(index2, 1, elemento);

        return fantasticFour;
    }

    return "Los indices indicados no corresponden al numero de elementos que hay en el Array";
}

console.log("\n----- CAMBIANDO ORDEN DE ELEMENTOS -----\n");

console.log(swap(indice1, indice2));
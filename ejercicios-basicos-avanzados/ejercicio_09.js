////////////////////////////////////////// EJERCICIO 9 //////////////////////////////////////////
/*
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 9 //////////////////////////////////////////");

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList)
{
    let sumatorio = 0;

    for(let numero of numberList)
    {
        sumatorio += numero;
    }

    return sumatorio;
}

console.log(numbers);
console.log("La suma total del Array es ->", sumNumbers(numbers));
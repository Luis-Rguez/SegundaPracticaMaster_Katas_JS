////////////////////////////////////////// EJERCICIO 10 //////////////////////////////////////////
/*
Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 10 //////////////////////////////////////////");

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(numberList)
{
    let sumatorio = 0;

    for(let numero of numberList)
    {
        sumatorio += numero;
    }

    return sumatorio / numberList.length;
}

console.log(numbers2);
console.log("El promedio total del Array es ->", average(numbers2));
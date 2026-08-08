////////////////////////////////////////// EJERCICIO 11 //////////////////////////////////////////
/*
Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 11 //////////////////////////////////////////");

const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];

function averageWord(list)
{
    let sumatorio = 0;

    for(let item of list)
    {
        if(typeof item ===  "number")
        {
            sumatorio += item;
        }else
        {
            sumatorio += item.length;
        }
    }

    return sumatorio/list.length;
}

console.log(mixedElements);
console.log("La media es ->", averageWord(mixedElements));
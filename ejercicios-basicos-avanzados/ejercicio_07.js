////////////////////////////////////////// EJERCICIO 7 //////////////////////////////////////////
/*
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 7 //////////////////////////////////////////");

function greaterNumber(numberOne , numberTwo)
{
    if(numberOne > numberTwo)
    {
        return "El 1º numero (" + numberOne + ") es mayor";
    }else
    {
        return "El 2º numero (" + numberTwo + ") es mayor";
    }

    return "Ambos numero son iguales"
}

console.log("\n" + greaterNumber(5, 8));
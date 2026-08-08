////////////////////////////////////////// EJERCICIO 40 //////////////////////////////////////////
/*
1.- Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
2.- Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 40 //////////////////////////////////////////");

const mainCharacters = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"];

function findArrayIndex(array, text)
{    
    return array.indexOf(text);
}

function removeltem(array, textoBorrar)
{
    let indiceBorrar = findArrayIndex(array, textoBorrar);

    if(indiceBorrar >= 0)
    {
        array.splice(indiceBorrar, 1);
        return array;
    }

    return "Ese Personaje no se encuentra en la lista";
}

let texto = "Rey";
let indicePersonaje = findArrayIndex(mainCharacters, texto);

console.log("----- 40.1 ----\n");

if(indicePersonaje >= 0)
{
    console.log("La palabra --", texto, "-- esta en el indice", indicePersonaje);
}else
{
    console.log("La palabra --", texto, "-- no existe en la lista de personajes");
}

texto = "Anakin";

console.log("----- 40.2 ----\n");
console.log("Procedemos a Borrar ->");
console.log("Sin borrar ->\n", mainCharacters);
console.log("Borrando ->\n", removeltem(mainCharacters, texto));
////////////////////////////////////////// EJERCICIO 13 //////////////////////////////////////////
/*
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 13 //////////////////////////////////////////");

const names = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];

function nameFinder(nameList, name)
{
    if(nameList.indexOf(name) != -1)
    {
        return true, nameList.indexOf(name); 
    }

    return false;
}

if(nameFinder(names, "Tony"))
{
    console.log("¡Encontrado! Esta en el indice", nameFinder(names, "Tony"));
}else
{
    console.log("No esta en la lista");
}
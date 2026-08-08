////////////////////////////////////////// EJERCICIO 12 //////////////////////////////////////////
/*
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 12 //////////////////////////////////////////");

const duplicates = ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda'];

function removeDuplicates(list)
{
    let listItemUnique = [];

    for(let i = 0; i < list.length; i++)
    {
        if(list.indexOf(list[i]) === i)
        {
            listItemUnique.push(list[i]);
        }
    }

    return listItemUnique;
}

console.log(duplicates);
console.log(removeDuplicates(duplicates));
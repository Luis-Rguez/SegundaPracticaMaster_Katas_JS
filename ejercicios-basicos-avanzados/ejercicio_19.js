////////////////////////////////////////// EJERCICIO 19 //////////////////////////////////////////
/*
Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).
*/
console.log("\n////////////////////////////////////////// EJERCICIO 19 //////////////////////////////////////////");

let wordDelete= "gato";
let newListToys = [];

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

console.log(toys);

//newListToys = toys.filter((juguete) => !juguete.name.includes(wordDelete));
//          || Hace lo mismo que el for of
for(let juguete of toys)
{
    if(!juguete.name.includes(wordDelete))
    {
        newListToys.push(juguete);
    }
}

console.log(newListToys);
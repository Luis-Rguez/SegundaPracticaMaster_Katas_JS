////////////////////////////////////////// EJERCICIO 15 //////////////////////////////////////////
/*
Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
*/
console.log("\n////////////////////////////////////////// EJERCICIO 15 //////////////////////////////////////////");

const products = ["Camiseta de Metallica", "Pantalón vaquero", "Gorra de beisbol", "Camiseta de Basket", "Cinturón de Orión", "AC/DC Camiseta"];

for(let clothing of products)
{
    if(clothing.includes("Camiseta"))
    {
        console.log(clothing);
    }
}
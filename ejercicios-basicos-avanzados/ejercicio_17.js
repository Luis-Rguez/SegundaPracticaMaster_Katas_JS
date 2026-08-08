////////////////////////////////////////// EJERCICIO 17 //////////////////////////////////////////
/*
For...in: Usa un for...in para imprimir por consola los datos del alienígena.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 17 //////////////////////////////////////////");

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const key in alien)
{  
    console.log("La propiedad", key, "tiene cómo valor:", alien[key]);   
}
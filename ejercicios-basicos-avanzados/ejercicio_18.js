////////////////////////////////////////// EJERCICIO 18 //////////////////////////////////////////
/*
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 18 //////////////////////////////////////////");

const placesTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" }
];

console.log(placesTravel);

for(let object of placesTravel)
{
    if(object.id === 11 || object.id === 40)
    {
        placesTravel.splice(placesTravel.indexOf(object), 1);
    }
}

console.log(placesTravel);
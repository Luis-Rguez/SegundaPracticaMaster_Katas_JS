////////////////////////////////////////// EJERCICIO 27 //////////////////////////////////////////
/*
Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 27 //////////////////////////////////////////");

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let cartoonOld;

for(let cartoonFisrt of cartoons)
{
    for(let cartoonSecond of cartoons)
    {
        if(cartoonFisrt.debut < cartoonSecond.debut)
        {
            if((typeof cartoonOld ===  "undefined") || cartoonOld.debut > cartoonFisrt.debut)
            {
                cartoonOld = cartoonFisrt;
            }
        }
    }
}

console.log("El Dibujo mas antiguo es", cartoonOld.name, "en el año", cartoonOld.debut);

// Si ordenadmos el array de menos a mayoos, sabremos que el primero es el mas viejo
cartoons.sort((a, b) => (a.debut - b.debut));
console.log("\nOrdenando la lista de menos a mayor y mostrando el primero obtenmos el mas antiguo->\n",cartoons[0]);
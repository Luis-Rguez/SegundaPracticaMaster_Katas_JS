////////////////////////////////////////// EJERCICIO 35 //////////////////////////////////////////
/*
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 35 //////////////////////////////////////////");

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power)
{
    let findMuntant = [];

    for(let mutant of mutants)
    {
        if(mutant.power === power)
        {
            findMuntant.push(mutant);
        }
    }

    if(findMuntant.length != 0)
    {
         return "Mutante ¡ENCONTRADO! Total de mutantes con el poder de " + power + " -> " + findMuntant.length ;
    }

    return "No hay ningun mutante con el poder de " + power;
}

power = "telekinesis";

console.log(findMutantByPower(mutants, power));
console.log(findMutantByPower(mutants, "fly"));
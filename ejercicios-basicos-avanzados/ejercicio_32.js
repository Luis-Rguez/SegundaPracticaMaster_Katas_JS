////////////////////////////////////////// EJERCICIO 32 //////////////////////////////////////////
/*
Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 32 //////////////////////////////////////////");

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1961 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMenOld)
{
    xMenOld.sort((a, b) => a.year - b.year);
    return xMenOld[0].name + " (" + xMenOld[0].year + ")";

/*
    let oldXMen= {name:"", year: 0};

    for (let i = 0; i < xMen.length; i++)
    {
        if(xMen[i].year < oldXMen.year || oldXMen.year == 0)
        {
            oldXMen.name = xMen[i].name;
            oldXMen.year = xMen[i].year;
        }   
    }

    return oldXMen.name + " (" + oldXMen.year + ")";
    */
}

console.log("El Miembro mas antiguo de los X-Men es -> " + findOldestXMen(xMen));
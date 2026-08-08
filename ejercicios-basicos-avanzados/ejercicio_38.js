////////////////////////////////////////// EJERCICIO 38 //////////////////////////////////////////
/*
Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 38 //////////////////////////////////////////");

const usersSound = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

function mediaSonidos(lista)
{
    let sumaVolume = 0;
    let cantidad = 0;

    for(let item of lista)
    {
        for (const key in item.favoritesSounds)
        {
           if(item.favoritesSounds[key].volume)
            {
                sumaVolume += item.favoritesSounds[key].volume;
                cantidad ++;
            }
        }
    }

    return "La media de volumen total es de " + sumaVolume / cantidad;
}

console.log(mediaSonidos(usersSound));
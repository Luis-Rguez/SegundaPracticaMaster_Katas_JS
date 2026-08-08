////////////////////////////////////////// EJERCICIO 30 //////////////////////////////////////////  TODO
/*
Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 30 //////////////////////////////////////////");

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

let tracksGenero = [];
let listaGeneros = [];

function setListaGeneros(genero)
{
    if(!listaGeneros.includes(genero))
    {
        listaGeneros.push(genero);
    }
}

function filtrarGenero(generoFind, indiceTrack)
{
    let filtroGenero = tracks.filter((musica) => (musica.genre == generoFind));
    
    tracksGenero.push({[generoFind]: []});

    for(let i = 0; i < filtroGenero.length; i++)
    {
        tracksGenero[indiceTrack][generoFind].push(filtroGenero[i].title);
    }
} 

for(let cancion of tracks)
{
    setListaGeneros(cancion.genre);
}

for (let i = 0; i < listaGeneros.length; i++)
{
    filtrarGenero(listaGeneros[i], i)
}

for (let cancionesGenero of tracksGenero)
{
    console.log(cancionesGenero);
    console.log("-----------------------------");
}
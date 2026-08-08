////////////////////////////////////////// EJERCICIO 37 //////////////////////////////////////////
/*
Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
Ten en cuenta que las categorías no tienen que repetirse.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 37 //////////////////////////////////////////");

const peliculasCategoria = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

function guardarCategorias(pelis)
{
    let listaCategorias = [];
    let encontrada = false;

    for(let film of pelis)
    {
        for(let categoria of film.categories)
        {
            if(!listaCategorias.includes(categoria))
            {
                listaCategorias.push(categoria);
            }

        }
    }

    return listaCategorias;
}

console.log(guardarCategorias(peliculasCategoria));
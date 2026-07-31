//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.
console.log("---- Ejercicio 5 ----");

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");
const h1 = document.createElement("h1");

h1.textContent = "Listado de Albunes";

for (const album of albums)
{
  const li = document.createElement("li");  
  li.textContent = album;

  ul.appendChild(li);
}

document.body.append(h1,ul);
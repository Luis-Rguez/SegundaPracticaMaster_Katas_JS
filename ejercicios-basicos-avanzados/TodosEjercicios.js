////////////////////////////////////////// EJERCICIO 1 //////////////////////////////////////////
/*
1.1 Crea una variable llamada miSuperheroeFavorito y asigna el valor "Hulk".
1.2 Crea una variable llamada numeroFavorito y asigna el valor 50.
1.3 Crea una variable llamada altura y asigna el valor 5.
1.4 Crea una variable llamada longitud y asigna el valor 10.
1.5 Crea una variable llamada suma y asigna el valor de altura + longitud.

Muestra todas las variables por consola.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 1 //////////////////////////////////////////");

const miSuperheroeFavorito = "Hulk";
const numeroFavorito = 50;
let altura = 5;
let longitud = 10;

let suma = altura + longitud;

console.log("1.1 -> Heroe Favorito ->", miSuperheroeFavorito);
console.log("1.2 -> Numero Favorito ->", numeroFavorito);
console.log("1.3 -> Altura ->", altura);
console.log("1.4 -> Longitud ->", longitud);
console.log("1.5 -> La suma de la altura y la longitud es ->", suma);




////////////////////////////////////////// EJERCICIO 2 //////////////////////////////////////////
console.log("\n////////////////////////////////////////// EJERCICIO 2 //////////////////////////////////////////");


/* ---------- 2.1 ---------
Luke Skywalker cumple años:
Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.
*/
console.log("----- 2.1 ----");

const jedi = {nombre: "Luke Skywalker", edad: 19};
console.log("Edad SIN Modificar ->", jedi);

jedi.edad = 25;
console.log("Edad Modificada ->", jedi);


/* ---------- 2.2 ---------
Presentación al estilo Leia Organa:
    Crea tres variables con la siguiente información:

nombre: "Leia"
apellido: "Organa"
edad: 20

    Muestra un mensaje por consola que siga la siguiente estructura:

"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."
    Utiliza la concatenación para ello.
*/
console.log("\n----- 2.2 ----");

const nombre = "Leia";
const apellido = "Organa";
let edad = 20;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa Alderaan.");


/* ---------- 2.3 ---------
 Calculando el coste total de sables de luz:

    Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
    Imprime el resultado por consola utilizando console.log.
*/
console.log("\n----- 2.3 ----");

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let precioTotal = sable1.precio + sable2.precio;
console.log("Precio Total ->", precioTotal);


/* ---------- 2.4 ---------
Actualizando el precio final de las naves:

    Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.
    Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).
*/
console.log("\n----- 2.4 ----");

let precioBaseGlobal = 10000;

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1.nombre, "\nPrecio Total ->", nave1.precioFinal);
console.log("-----------------------------");
console.log(nave2.nombre, "\nPrecio Total ->", nave2.precioFinal);





////////////////////////////////////////// EJERCICIO 3 //////////////////////////////////////////
/*
En este ejercicio podéis mostrar directamente los resultados por consola o almacenarlos en variables (esto lo podéis hacer en todos los demás, como os resulte más claro).
3.1 Multiplica 10 por 5 y muestra el resultado mediante console.
3.2 Divide 10 por 2 y muestra el resultado en un console.
3.3 Muestra mediante un console el resto de dividir 15 por 9.
3.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
3.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 3 //////////////////////////////////////////");

console.log("3.1 -> 10 * 5 =", (10 * 5));
console.log("3.2 -> 10 / 2 = ", (10 / 2));
console.log("3.3 -> Resto 15 / 9 =", (15 % 9));

const p = 10;
const j = 5;
let o = j + p;
console.log("3.4 -> " + p + " + " + j + " = " + o);

const c = 10;
const m = 5;
let i = c * m;
console.log("3.5 -> " + c + " * " + m + " = " + i);




////////////////////////////////////////// EJERCICIO 4 //////////////////////////////////////////
/*
4.1 Saca a "Tendo" por consola atacando su posición.
4.2 Coloca en el último lugar de este array a "Cervasio".
4.3 Cambia el primer elemento de este array por "Bambina".
4.4 Dale la vuelta a este array.
4.5 Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
4.6 Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
*/
console.log("\n////////////////////////////////////////// EJERCICIO 4 //////////////////////////////////////////");

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log("aldeanos =",  aldeanos);

// ---------- 4.1 ---------
let indice = 0;
console.log("4.1 -> ", aldeanos[3]);

// Variante del 4.1
indice = aldeanos.indexOf("Tendo");
console.log("4.1 (Variante) -> ", aldeanos[indice]);

// ---------- 4.2 ---------
aldeanos.push("Cervasio")
console.log("4.2 -> ", aldeanos);

// ---------- 4.3 ---------
aldeanos.unshift("Bambina");
console.log("4.3 -> ", aldeanos);

// ---------- 4.4 ---------
aldeanos.reverse();
console.log("4.4 -> ", aldeanos);

// ---------- 4.5 ---------
indice = aldeanos.indexOf("Narciso");
aldeanos.splice(indice,1, "Canela");
console.log("4.5 -> ", aldeanos);

// ---------- 4.6 ---------
console.log("4.6 -> ", aldeanos[aldeanos.length - 1]);




////////////////////////////////////////// EJERCICIO 5 //////////////////////////////////////////
/*
En base a este código, cambia todos los COMPLETAR por la condición correspondiente para que se lancen todos los console.log correctamente.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 5 //////////////////////////////////////////");

const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if ((number2 / number1) == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if ((number3 * 5) == number1) {
  console.log("number3 por 5 es igual a number1");
}

if ((number3 * 5 ) == number1 && (number1 * 2) == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if ((number2 / 2) == number1 || (number1 / 5) == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}




////////////////////////////////////////// EJERCICIO 6 //////////////////////////////////////////
console.log("\n////////////////////////////////////////// EJERCICIO 6 //////////////////////////////////////////");

/* 
---------- 6.1 ---------
Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
*/
console.log("\n----- 6.1 ----");

for(let i = 0; i <=9; i++)
{
    console.log("Valor de i ->", i);
}


/* 
---------- 6.2 --------- 
Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo
cuando el resto del numero dividido entre 2 sea 0.
*/
console.log("\n----- 6.2 ----");

for(let i = 0; i <= 9; i++)
{
    if(i %2 === 0)
    {
        console.log("Valor de i con resto 0 ->", i)
    }
}

/* 
---------- 6.3 ---------
Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
y cambia el mensaje en la décima vuelta a '¡Dormido!'.
*/
console.log("\n----- 6.1 ----");

for(let i = 1; i < 11; i++)
{
    if(i !== 10)
    {
        console.log("Intentando dormir 🐑");
    }else
    {
        console.log("¡ D O R M I D O ! 💤💤💤");
    }

}




////////////////////////////////////////// EJERCICIO 7 //////////////////////////////////////////
/*
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 7 //////////////////////////////////////////");

function greaterNumber(numberOne , numberTwo)
{
    if(numberOne > numberTwo)
    {
        return "El 1º numero (" + numberOne + ") es mayor";
    }else
    {
        return "El 2º numero (" + numberTwo + ") es mayor";
    }

    return "Ambos numero son iguales"
}

console.log("\n" + greaterNumber(5, 8));




////////////////////////////////////////// EJERCICIO 8 //////////////////////////////////////////
/*
Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 8 //////////////////////////////////////////");

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

let palabraLarga = "";


function findLongestWord(avengers)
{
    for(let heroe of avengers )
    {
        if(heroe.length > palabraLarga.length )
        {
            palabraLarga = heroe;
        }
    }

    return palabraLarga;
}

console.log("El 1º nombre mas largo de la lista de los Avengers es el HEROE-> " + findLongestWord(avengers));




////////////////////////////////////////// EJERCICIO 9 //////////////////////////////////////////
/*
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 9 //////////////////////////////////////////");

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList)
{
    let sumatorio = 0;

    for(let numero of numberList)
    {
        sumatorio += numero;
    }

    return sumatorio;
}

console.log(numbers);
console.log("La suma total del Array es ->", sumNumbers(numbers))




////////////////////////////////////////// EJERCICIO 10 //////////////////////////////////////////
/*
Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 9 //////////////////////////////////////////");

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(numberList)
{
    let sumatorio = 0;

    for(let numero of numberList)
    {
        sumatorio += numero;
    }

    return sumatorio / numberList.length;
}

console.log(numbers2);
console.log("El promedio total del Array es ->", average(numbers2));




////////////////////////////////////////// EJERCICIO 11 //////////////////////////////////////////
/*
Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 11 //////////////////////////////////////////");

const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];

function averageWord(list)
{
    let sumatorio = 0;

    for(let item of list)
    {
        if(typeof item ===  "number")
        {
            sumatorio += item;
        }else
        {
            sumatorio += item.length;
        }
    }

    return sumatorio;
}

console.log(mixedElements);
console.log(averageWord(mixedElements));




////////////////////////////////////////// EJERCICIO 12 //////////////////////////////////////////
/*
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 12 //////////////////////////////////////////");

const duplicates = ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda'];

function removeDuplicates(list)
{
    let listItemUnique = [];

    for(let i = 0; i < list.length; i++)
    {

        if(list.indexOf(list[i]) === i)
        {
            listItemUnique.push(list[i]);
        }
    }

    return listItemUnique;
}

console.log(duplicates);
console.log(removeDuplicates(duplicates));




////////////////////////////////////////// EJERCICIO 13 //////////////////////////////////////////
/*
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 13 //////////////////////////////////////////");

const names = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];

function nameFinder(nameList, name)
{
    if(nameList.indexOf(name) != -1)
    {
        return true, nameList.indexOf(name); 
    }

    return false;
}

if(nameFinder(names, "Tony"))
{
    console.log("¡Encontrado! Esta en el indice", nameFinder(names, "Tony"));
}else
{
    console.log("No esta en la lista");
}




////////////////////////////////////////// EJERCICIO 14 //////////////////////////////////////////
/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 14 //////////////////////////////////////////");

const words = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'sleep', 'code'];

function repeatCounter(list, wordFinder)
{
    let i = 0;

    for(let word of list)
    {   
        if(wordFinder === word)
        {
            i++;
        }
    }
    return i;
}

for(let word of words)
{
    console.log(word + ":", repeatCounter(words, word));
}




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




////////////////////////////////////////// EJERCICIO 16 //////////////////////////////////////////
/*
For...of: Usa un bucle forof para recorrer todos los destinos del array.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 16 //////////////////////////////////////////");

const placesToTravel = ["Japon", "Venecia", "Murcia", "Santander", "Filipinas", "Madagascar"];

for(let place of placesToTravel)
{
    console.log(place);
}




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




////////////////////////////////////////// EJERCICIO 19 //////////////////////////////////////////
/*
Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).
*/
console.log("\n////////////////////////////////////////// EJERCICIO 19 //////////////////////////////////////////");

let wordDelete= "gato";
let newListToys = [];

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

console.log(toys);

//newListToys = toys.filter((juguete) => !juguete.name.includes(wordDelete));
//          || Hace lo mismo que el for of
for(let juguete of toys)
{
    if(!juguete.name.includes(wordDelete))
    {
        newListToys.push(juguete);
    }
}

console.log(newListToys);




////////////////////////////////////////// EJERCICIO 20 //////////////////////////////////////////
/*
For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 20 //////////////////////////////////////////");

const popularToys = [];

const toys20 = [
    {id: 101, name: 'Super Soaker', sellCount: 15},
    {id: 102, name: 'Tamagotchi', sellCount: 22},
    {id: 103, name: 'Polly Pocket', sellCount: 8},
    {id: 104, name: 'Yo-yo', sellCount: 33},
    {id: 105, name: 'Pikachu plush toy', sellCount: 19},
    {id: 106, name: "Rubik's Cube", sellCount: 27},
    {id: 107, name: 'Fidget Spinner', sellCount: 12},
    {id: 108, name: 'Slinky', sellCount: 5},
    {id: 109, name: 'Magic 8-Ball', sellCount: 38},
    {id: 110, name: 'Troll Doll', sellCount: 20}
];

for(let toy of toys20)
{
    if(toy.sellCount > 15)
    {
        popularToys.push(toy);
    }
}

console.log(popularToys);




////////////////////////////////////////// EJERCICIO 21 //////////////////////////////////////////
/*
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
*/
console.log("\n////////////////////////////////////////// EJERCICIO 21 //////////////////////////////////////////");

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 }
];

for(let user of users)
{
    if(user.years >= 18)
    {
        console.log("Usuarios mayores de edad:", user.name);
    }else
    {
        console.log( "Usuarios menores de edad:", user.name);
    }
}




////////////////////////////////////////// EJERCICIO 22 //////////////////////////////////////////
/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 22 //////////////////////////////////////////");

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true }
];

console.log(foodSchedule);

function comprobarFruta(listFood)
{
    let repetida = false;

    for(let fruit of fruits)
    {
        for(let food of listFood)
        {
            if(food.name.includes(fruit))
            {
                repetida = true;
            }
        }

        if(!repetida)
        {
            return fruit;
        }

        repetida = false;
    }
}

for(let food of foodSchedule)
{
    if(food.isVegan === false)
    {
        food.name = comprobarFruta(foodSchedule);
        food.isVegan = true;
    }
}

console.log(foodSchedule);




////////////////////////////////////////// EJERCICIO 23 //////////////////////////////////////////
/*
Usa un bucle para crear 3 arrays de películas filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 23 //////////////////////////////////////////");

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

let peliculaPequenia = [];
let peliculaMediana = [];
let peliculaGrande = [];

peliculaPequenia = movies.filter((movie) => movie.durationInMinutes < 100);
peliculaMediana = movies.filter((movie) => (movie.durationInMinutes >= 100) && (movie.durationInMinutes < 200));
peliculaGrande = movies.filter((movie) => (movie.durationInMinutes >= 200));

console.log("Listado de Peliculas Pequeñas ->");
peliculaPequenia.forEach((pelicula) => console.log(pelicula["name"]));

console.log("\nListado de Peliculas Medianas ->");
peliculaMediana.forEach((pelicula) => console.log(pelicula["name"]));

console.log("\nListado de Peliculas Grandes ->");
peliculaGrande.forEach((pelicula) => console.log(pelicula["name"]));




////////////////////////////////////////// EJERCICIO 24 //////////////////////////////////////////
/*
Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 24 //////////////////////////////////////////");

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];

const humanCharacters = [];

for(let character of characters)
{
    if(character.species.includes("Human"))
    {
        humanCharacters.push(character);
    }
}

console.log(humanCharacters);




////////////////////////////////////////// EJERCICIO 25 //////////////////////////////////////////
/*
Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 25 //////////////////////////////////////////");

const moviesOld = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

let countPelisViejas = 0;
let countPelisNuevas = 0;

moviesOld.forEach((peli) => {if (peli.releaseYear < 2000)
    countPelisViejas++});

console.log("Total de Pelis Viejas->", countPelisViejas);


moviesOld.forEach((peli) => {if (peli.releaseYear > 2000)
    countPelisNuevas++});

console.log("Total de Pelis Nuevas->", countPelisNuevas);




////////////////////////////////////////// EJERCICIO 26 //////////////////////////////////////////
/*
Filtra una lista de canciones para crear una playlist que solo contenga canciones de rock que duren más de 5 minutos.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 26 //////////////////////////////////////////");

const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 }
];

const rockPlaylist = songs.filter((song) => song.duration > 5);;

console.log(rockPlaylist);




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




////////////////////////////////////////// EJERCICIO 28 //////////////////////////////////////////
/*
Dada una lista de álbumes de música, utiliza un bucle para sumar todas las duraciones solo de los álbumes de rock y luego imprime el total de estas duraciones por consola.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 28 //////////////////////////////////////////");

const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'Shakira', genre: 'Pop', duration: 50.11 },
  { title: 'The Wall', genre: 'Rock', duration: 81.00 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 },
  { title: 'Marc Anthony', genre: 'Pop', duration: 50.11 }
];

let totalDuracion = 0;

for(let songs of albums)
{
    if(songs.genre.includes("Rock"))
    {
        totalDuracion += songs.duration;
    }
}

console.log("La duracion total de los albumnes de Rock son ->", totalDuracion);




////////////////////////////////////////// EJERCICIO 29 //////////////////////////////////////////
/*
Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 29 //////////////////////////////////////////");

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

let filmDecadaStarWars = [];
let fechaActual = 2026;

function anadirPelicula(inicioDecada, moviesDecada)
{    
    let starWars = {
        decada: inicioDecada,
        peliculas: moviesDecada
    };

    filmDecadaStarWars.push(starWars);
}

function filtrarDecada(inicioDecada, finDecada)
{
    let moviesDecada = starWarsMovies.filter((movie) => (movie.releaseYear >= inicioDecada && movie.releaseYear < finDecada));
    anadirPelicula(inicioDecada, moviesDecada);
}

for(let fechaInicio = 1970; fechaInicio < fechaActual; fechaInicio += 10)
{
    filtrarDecada(fechaInicio, fechaInicio + 10);
}

for (const decada of filmDecadaStarWars)
{
    console.log(decada);
    console.log("-----------------------------");
}




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




////////////////////////////////////////// EJERCICIO 31 //////////////////////////////////////////
/*
Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 31 //////////////////////////////////////////");

const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

for(let artista of artists)
{
    for(let influencia of artista.influences)
    {
        console.log(artista.name, "->", influencia);
    }

    console.log("");
}




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




////////////////////////////////////////// EJERCICIO 33 //////////////////////////////////////////
/*
Desarrolla una función que reciba un país por parámetro y devuelva su capital.
La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 33 //////////////////////////////////////////");

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country)
{
    for(let countryFind in capitals)
    {
        if(countryFind === country)
        {
            return "La capital de " + country + " es " + capitals[countryFind];
        }
    }

    return "Lo sentimos, ese pais no se encuentra en la lista"
}

country = "Italy";

console.log(getCapital(country));
console.log(getCapital("Japan"));




////////////////////////////////////////// EJERCICIO 34 //////////////////////////////////////////
/*
Escribe una función que calcule el promedio de duración de una lista de películas.
Recibe un array de películas, cada una con su duración en minutos.
La función debe devolver el promedio de duración de todas las películas.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 34 //////////////////////////////////////////");

const films = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(films)
{
    totalDuracion = 0;

    for(let peliculas of films)
    {
        totalDuracion += peliculas.duration;
    }

    return totalDuracion/films.length; 
}

console.log("La Duracion ppromedio por pelicula es de", averageMovieDuration(films));




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




////////////////////////////////////////// EJERCICIO 36 //////////////////////////////////////////
/*
Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 36 //////////////////////////////////////////");

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

anioActucal = 2026;

function calculateActorsAges(actors)
{
    let edad = 0;
    let yearsActor = [];

    for(let actor of actors)
    {
        edad = anioActucal - actor.born;
        actor.years = edad;
        yearsActor.push(actor);
    }

    return yearsActor
}

console.log(calculateActorsAges(actors));




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




////////////////////////////////////////// EJERCICIO 39 //////////////////////////////////////////
/*
Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 39 //////////////////////////////////////////");

const usersFavoritesSound = [
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

function agregadoFavorito(listaFavorito)
{
    let cantidadSonidosUsados = [];
    let sonido = {};
    let repetido = false;

    for(let item of listaFavorito)
    {
        for (const key in item.favoritesSounds)
        {
            for(let sonidoUsuado of cantidadSonidosUsados)
            {
               
                if(sonidoUsuado.name == key)
                {
                    repetido = true;
                    sonidoUsuado.repetido ++;
                    break;
                }
            }

            if(!repetido)
            {
                cantidadSonidosUsados.push({name: key, repetido: 1});
            }

            repetido = false;
        }
    }

    return cantidadSonidosUsados;   
}

console.log(agregadoFavorito(usersFavoritesSound));




////////////////////////////////////////// EJERCICIO 40 //////////////////////////////////////////
/*
1.- Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
2.- Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 40 //////////////////////////////////////////");

const mainCharacters = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"];

function findArrayIndex(array, text)
{    
    return array.indexOf(text);
}

function removeltem(array, textoBorrar)
{
    let indiceBorrar = findArrayIndex(array, textoBorrar);

    if(indiceBorrar >= 0)
    {
        array.splice(indiceBorrar, 1);
        return array;
    }

    return "Ese Personaje no se encuentra en la lista";
}

let texto = "Rey";
let indicePersonaje = findArrayIndex(mainCharacters, texto);

console.log("----- 40.1 ----\n");

if(indicePersonaje >= 0)
{
    console.log("La palabra --", texto, "-- esta en el indice", indicePersonaje);
}else
{
    console.log("La palabra --", texto, "-- no existe en la lista de personajes");
}

texto = "Anakin";

console.log("----- 40.2 ----\n");
console.log("Procedemos a Borrar ->");
console.log("Sin borrar ->\n", mainCharacters);
console.log("Borrando ->\n", removeltem(mainCharacters, texto));




////////////////////////////////////////// EJERCICIO 41 //////////////////////////////////////////
/*
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
Que la función use el parametro para simular una tirada de dado y retornar el resultado.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 41 //////////////////////////////////////////");

function rollDice(numCaras)
{
    let min = Math.ceil(1);
    let max = Math.floor(numCaras);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

let carasDado = 20;

for(let i = 0; i < 5; i++)
{
    console.log(i+1 + "º Tirada ->", rollDice(carasDado));
}




////////////////////////////////////////// EJERCICIO 42 //////////////////////////////////////////
/*
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 42 //////////////////////////////////////////");

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

let indice1 = 0;
let indice2 = 3;

console.log(fantasticFour);

function swap(index1, index2)
{
    if((index1 >=0 && index1 < fantasticFour.length) && (index2 >=0 && index2 < fantasticFour.length))
    {
        let elemento = fantasticFour[index1];

        fantasticFour.splice(index1, 1, fantasticFour[index2]);
        fantasticFour.splice(index2, 1, elemento);

        return fantasticFour;
    }

    return "Los indices indicados no corresponden al numero de elementos que hay en el Array";
}

console.log("\n----- CAMBIANDO ORDEN DE ELEMENTOS -----\n");

console.log(swap(indice1, indice2));

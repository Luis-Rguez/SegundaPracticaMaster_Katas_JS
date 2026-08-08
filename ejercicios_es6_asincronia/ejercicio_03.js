/* 3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().*/
console.log("\n---- Ejercicio 3.1 ----");

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName = users.map((user) => user.name);

console.log(usersName);



/* 3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.*/
console.log("\n---- Ejercicio 3.2 ----");

const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const name = users2.map((user) => user.name[0] === "A" ? user.name = "Anacleto" : user.name);

console.log(users2);



/* 3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.*/
console.log("\n---- Ejercicio 3.3 ----");

const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const citiesChek = cities.map((city) => city.isVisited ? city.name + " Visitado" : city.name);

console.log(citiesChek);
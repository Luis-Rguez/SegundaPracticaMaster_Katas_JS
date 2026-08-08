/* 2.1 Dado el siguiente array, crea una copia usando spread operators.*/
console.log("\n---- Ejercicio 2.1 ----");

const pointsList = [32, 54, 21, 64, 75, 43];

const copyPoints = [...pointsList];

console.log(copyPoints);



/* 2.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
console.log("\n---- Ejercicio 2.2 ----");

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copyToy = {...toy};

console.log(copyToy);



/* 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.*/
console.log("\n---- Ejercicio 2.3 ----");

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];

const unionPoints = [...pointsList2, ...pointsList3];

console.log(unionPoints);



/* 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.*/
console.log("\n---- Ejercicio 2.4 ----");

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy2Update = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const finalToys = {...toy2, ...toy2Update};

console.log(finalToys);



/* 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.*/
console.log("\n---- Ejercicio 2.5 ----");

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copyColors = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(copyColors);
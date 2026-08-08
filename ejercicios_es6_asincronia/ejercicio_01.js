/* 1.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.*/
console.log("\n---- Ejercicio 1.1 ----");

const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

const {title, gender, year} = game;

console.log(title, "\n" + gender, "\n" + year);



/* 1.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.*/
console.log("\n---- Ejercicio 1.2 ----");

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, frui2, frui3] = fruits;

console.log(fruit1, "\n" + frui2, "\n" + frui3);



/* 1.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.*/
console.log("\n---- Ejercicio 1.3 ----");

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

const {name: nombre, race: carrera} = animalFunction();

console.log(nombre, carrera);



/* 1.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.*/
console.log("\n---- Ejercicio 1.4 ----");

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name: modelo, itv : [itv1, itv2, itv3]} = car;

console.log(modelo);
console.log(itv1);
console.log(itv2);
console.log(itv3);
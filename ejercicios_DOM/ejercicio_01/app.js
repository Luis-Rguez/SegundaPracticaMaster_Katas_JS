// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log("---- Ejercicio 1.1 ----");

const btnShowme = document.querySelector(".showme");
console.log(btnShowme);



// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log("---- Ejercicio 1.2 ----");

console.log(document.querySelector("#pillado"));



// 1.3 Usa querySelector para mostrar por consola todos los p
console.log("---- Ejercicio 1.3 ----");

console.log(document.querySelectorAll("p"));

const textP = document.querySelectorAll("p");
for (const text of textP)
{
    console.log(text.textContent);    
}



// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
console.log("---- Ejercicio 1.4 ----");

const listPokemos = document.querySelectorAll(".pokemon");

console.log(listPokemos);

for (const pokemon of listPokemos)
{
    console.log(pokemon.textContent);    
}



// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
console.log("---- Ejercicio 1.5 ----");

const listTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(listTestMe);



// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log("---- Ejercicio 1.6 ----");

console.log(listTestMe[2].textContent);

for(let i = 0; i < listTestMe.length; i++)
{
    if(i == 2)
    {
        console.log(listTestMe[i].textContent);
    }
}
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
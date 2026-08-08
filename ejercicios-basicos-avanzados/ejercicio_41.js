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
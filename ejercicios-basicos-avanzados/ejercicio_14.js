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
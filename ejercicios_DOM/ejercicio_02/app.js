//2.1 Inserta dinamicamente en un html un div vacio con javascript.
console.log("---- Ejercicio 2.1 ----");

const div = document.createElement("div");
div.className = "nuevo_div"
document.body.appendChild(div);



//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
console.log("---- Ejercicio 2.2 ----");

const div2 = document.createElement("div");
div2.className = "div2"

const p = document.createElement("p");
div2.appendChild(p)

document.body.appendChild(div2);



//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
console.log("---- Ejercicio 2.3 ----");

let numLimit = 6;

const div3 = document.createElement("div");
div3.className = "div3";

for(let i = 0; i < numLimit; i++)
{
    const p2 = document.createElement("p");
    div3.appendChild(p2);
}

document.body.appendChild(div3);



//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
console.log("---- Ejercicio 2.4 ----");

const p4 = document.createElement("p");
p4.textContent = "Soy Dinamico";

document.body.appendChild(p4);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
console.log("---- Ejercicio 2.5 ----");

const h2_Ej5 = document.querySelector(".fn-insert-here");

h2_Ej5.textContent = "Wubba Lubba dub dub";



//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
console.log("---- Ejercicio 2.6 ----");

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul_Ej6 = document.createElement("ul");

for (const app of apps)
{
    const li_Ej6 = document.createElement("li");
    li_Ej6.textContent = app;

    ul_Ej6.appendChild(li_Ej6);
}

document.body.appendChild(ul_Ej6);



//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
console.log("---- Ejercicio 2.7 ----");

const eliminarClase = document.querySelectorAll(".fn-remove-me");

for (const elemento of eliminarClase)
{
    elemento.remove();    
}



//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.	Recuerda que no solo puedes insertar elementos con .appendChild.
console.log("---- Ejercicio 2.8 ----");

const div_Ej8 = document.querySelector("div");

const p_Ej8 = document.createElement("p");
p_Ej8.textContent = "Voy en medio!";

div_Ej8.insertAdjacentElement("afterend", p_Ej8);



//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
console.log("---- Ejercicio 2.9 ----");

const listDivInsert = document.querySelectorAll("div.fn-insert-here");

for (const element of listDivInsert)
{
    const p_Ej9 = document.createElement("p");
    p_Ej9.textContent = "Voy dentro!";

    element.appendChild(p_Ej9);
}

console.log(listDivInsert.length);
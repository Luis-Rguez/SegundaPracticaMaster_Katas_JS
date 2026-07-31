// 3.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
console.log("---- Ejercicio 3.1 ----");

const paises = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");

for (const pais of paises)
{
    const li = document.createElement("li");    
    li.textContent = pais;

    ul.appendChild(li);
}

document.body.appendChild(ul);



// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.
console.log("---- Ejercicio 3.2 ----");

const fnRemove = document.querySelectorAll(".fn-remove-me");

for (const element of fnRemove)
{
    element.remove();    
}



// 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
console.log("---- Ejercicio 3.3 ----");

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divData = document.querySelector('[data-function="printHere"]');
const ul_Ej3 = document.createElement("ul");

for (const car of cars)
{
    const li = document.createElement("li");
    li.textContent = car;

    ul_Ej3.appendChild(li);
}

divData.appendChild(ul_Ej3);



// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
console.log("---- Ejercicio 3.4 ----");

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries)
{
    const div = document.createElement("div");
    div.className = "Imagen";

    div.innerHTML = `
        <h4>${country.title}</h4>
        <img src="${country.imgUrl}" alt="${"Imagen Random"}">
    `;

    document.body.appendChild(div);
}



// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
console.log("---- Ejercicio 3.5 ----");

const button = document.createElement("button");
button.textContent = "Borrar";
document.body.appendChild(button);

button.addEventListener("click", (event) =>
{
    const listDivs = document.querySelectorAll("div.Imagen");
    listDivs[listDivs.length - 1].remove();
});



// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
console.log("---- Ejercicio 3.6 ----");

const listDivs = document.querySelectorAll("div.Imagen");

for (const div of listDivs)
{
    const buttonDiv = document.createElement("button");
    buttonDiv.textContent = "Borrar";

    div.appendChild(buttonDiv);

    buttonDiv.addEventListener("click", (event) =>
    {
        div.remove();
    });
}


// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
console.log("---- Ejercicio 4.1 ----");

const btn = document.createElement("button");
btn.id = "btnToClick";
btn.textContent = "Pulsar";

document.body.appendChild(btn);

btn.addEventListener("click", (event) => {
    console.log(event);
});



// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
console.log("---- Ejercicio 4.2 ----");

const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => {
    console.log(event.target.value);
});

// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
console.log("---- Ejercicio 4.3 ----");

const inputInput = document.querySelector(".value");
inputInput.addEventListener("input", (event) => {
    console.log(event.target.value);
});

/*El evento input se dispara cada vez que el usuario escribe, borra o pega texto*/
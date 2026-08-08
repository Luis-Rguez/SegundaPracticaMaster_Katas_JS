////////////////////////////////////////// EJERCICIO 4 //////////////////////////////////////////
/*
4.1 Saca a "Tendo" por consola atacando su posición.
4.2 Coloca en el último lugar de este array a "Cervasio".
4.3 Cambia el primer elemento de este array por "Bambina".
4.4 Dale la vuelta a este array.
4.5 Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
4.6 Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
*/
console.log("\n////////////////////////////////////////// EJERCICIO 4 //////////////////////////////////////////");

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log("aldeanos =",  aldeanos);

// ---------- 4.1 ---------
let indice = 0;
console.log("4.1 -> ", aldeanos[3]);

// Variante del 4.1
indice = aldeanos.indexOf("Tendo");
console.log("4.1 (Variante) -> ", aldeanos[indice]);

// ---------- 4.2 ---------
aldeanos.push("Cervasio")
console.log("4.2 -> ", aldeanos);

// ---------- 4.3 ---------
aldeanos.unshift("Bambina");
console.log("4.3 -> ", aldeanos);

// ---------- 4.4 ---------
aldeanos.reverse();
console.log("4.4 -> ", aldeanos);

// ---------- 4.5 ---------
indice = aldeanos.indexOf("Narciso");
aldeanos.splice(indice,1, "Canela");
console.log("4.5 -> ", aldeanos);

// ---------- 4.6 ---------
console.log("4.6 -> ", aldeanos[aldeanos.length - 1]);
/* Realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.*/
console.log("\n---- Ejercicio 9 ----");

const pokemonRandom = {};

const numeroRandom = () => 
    {
        const min = 1;
        const max =151;
        
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

const peticionURL = () =>
    {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom()}`).
                        then((respuesta) => respuesta.json()).
                        catch((error) => {console.error(error);});
    };

const generarImgHTML = () =>
    {
        const img = document.querySelector(".random-image");

        img.src = pokemonRandom.imagen;
        img.alt = pokemonRandom.nombre;

        document.body.append(img);
    };

const generarInfoHTML = () =>
    {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        h1.textContent = pokemonRandom.nombre;
        h2.textContent = "Posicion:"
        p.textContent = pokemonRandom.id;

        h2.appendChild(p);
        div.append(h1, h2);

        document.body.appendChild(div);
    };

peticionURL().then((datos) => 
    {
        pokemonRandom.id = datos.id,
        pokemonRandom.nombre = datos.name,
        pokemonRandom.imagen = datos.sprites.other.showdown.front_default

        generarImgHTML();
        generarInfoHTML()
    });

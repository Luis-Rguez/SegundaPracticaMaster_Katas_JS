const llenarSelect = (datos) =>
{
    console.log(datos);
}

const peticionPersonajes = async () =>
{
    try
    {
        const respuesta = await fetch("https://thronesapi.com/api/v2/Characters");
        const datos = await respuesta.json();
        return datos;
    }catch(error)
    {
        console.error(error)
    }
}

const personajesList = await peticionPersonajes();

const introducirSelect = () =>
{
    const select = document.querySelector("#character-list");

    for (const personaje of personajesList)
    {
        const option = document.createElement("option");

        if(personaje.id % 2 === 0)
        {
            option.className = "option_Par";
        }else
        {
            option.className = "option_Impar";
        }

        option.value = personaje.fullName;
        option.innerText = personaje.fullName;

        select.append(option);
    }
}

const seleccion = () =>
{
    const select = document.querySelector("#character-list");

    select.addEventListener("change", (evento) =>
        {          
            const img = document.querySelector(".character-image");
            img.remove();
            
            const valorSeleccionado = evento.target.value;            
            
            const personajeElegido = personajesList.find((personaje) => personaje.fullName === valorSeleccionado);
            console.log(personajeElegido.imageUrl);

            img.src = personajeElegido.imageUrl;
            img.alt = valorSeleccionado

            document.body.append(img)
        });
}

introducirSelect();
seleccion();
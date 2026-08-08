////////////////////////////////////////// EJERCICIO 22 //////////////////////////////////////////
/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
*/
console.log("\n////////////////////////////////////////// EJERCICIO 22 //////////////////////////////////////////");

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true }
];

console.log(foodSchedule);

function comprobarFruta(listFood)
{
    let repetida = false;

    for(let fruit of fruits)
    {
        for(let food of listFood)
        {
            if(food.name.includes(fruit))
            {
                repetida = true;
            }
        }

        if(!repetida)
        {
            return fruit;
        }

        repetida = false;
    }
}

for(let food of foodSchedule)
{
    if(food.isVegan === false)
    {
        food.name = comprobarFruta(foodSchedule);
        food.isVegan = true;
    }
}

console.log(foodSchedule);
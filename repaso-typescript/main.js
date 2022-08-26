// Definir una variable en typscript
let mi_variable = "Sheyla Perez";
let numero = 3;
let verdadero = true;
let cualquiercosa = "Puedo meter lo que sea";
verdadero = false;
// constantes
const nombre = "Sheyla";
console.log(mi_variable, numero, verdadero);
// Arrays
let personas = ["Paco", "Peepe", "Shey"];
let div_personas = document.querySelector("#personas");
div_personas.innerHTML =
    "<ul>" +
        personas
            .map((persona) => {
            return `<li>${persona}</li>`;
        })
            .join("");
("</ul>");

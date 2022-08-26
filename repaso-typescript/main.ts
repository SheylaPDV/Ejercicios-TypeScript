// Definir una variable en typscript
let mi_variable: string = "Sheyla Perez";
let numero: number = 3;
let verdadero: boolean = true;
let cualquiercosa: any = "Puedo meter lo que sea";
verdadero = false;

// constantes
const nombre: string = "Sheyla";
console.log(mi_variable, numero, verdadero);
// Arrays
let personas: string[] = ["Paco", "Peepe", "Shey"];

let div_personas: HTMLElement | null = document.querySelector("#personas");

div_personas.innerHTML =
  "<ul>" +
  personas
    .map((persona) => {
      return `<li>${persona}</li>`;
    })
    .join("");

("</ul>");

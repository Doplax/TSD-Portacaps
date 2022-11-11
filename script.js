/*
Sustituir L2 y B por "Conicidad"

conicidades {
    12,7 
    15 { 20 o}
    19
}

diametros A = {
    diametro 19 { 12,7}
    diametro 20 { 15 }
    diametro 22 { 15 }
    diametro 25 { 15,19 }
    
}
*/

const diametro = document.querySelector("#options")
diametro.addEventListener("change", () => {
        if (diametro.value   == 19) {

                // cargar 12,7

        } else if (diametro.value   == 20){
                // cargar 15

        } else if (diametro.value == 22){
                // Cargar 15

        } else if (diametro.value == 25){
                // cargar 15, 19
        } 
})

function prueba() {
        
}

function createOption(optionValue) {
        let option = document.createElement("option")
        option.innerHTML = String(optionValue)
        diametro.appendChild(option)
}

//// PRUEBAS

// function Persona(nombre) {
//         this.nombre = nombre
// }

let Persona = class {
        constructor(nombre){
                this.nombre = "Pol"
        }
}

let p = new Persona("oi")

console.log(p);
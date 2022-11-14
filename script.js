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

function createOption(optionValue) {
    let option = document.createElement("option")
    option.innerHTML = String(optionValue)
    diametro.appendChild(option)
}


/////////////////////////////////////////////////



const diametro = document.querySelector("#options")
diametro.addEventListener("change", () => {
        if (diametro.value   == 19) {
            createOption(12.7)
                // cargar 12,7

        } else if (diametro.value   == 20){
            createOption(15)

        } else if (diametro.value == 22){
            createOption(15)

        } else if (diametro.value == 25){
            createOption(15)
            createOption(19)
            // cargar 15, 19
        } 
})




//// PRUEBAS

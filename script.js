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
function clearConicidadList() {
    while (conicidad.firstChild) { conicidad.removeChild(conicidad.firstChild);} 
}

function createOption(optionValue) {
    let option = document.createElement("option");
    option.innerHTML = String(optionValue);
    conicidad.appendChild(option);
}


/////////////////////////////////////////////////
const conicidad = document.querySelector("#conicidad")




const diametro = document.querySelector("#diametro")
diametro.addEventListener("change", () => {
        if (diametro.value   == 19) {
            clearConicidadList()
            createOption(12.7)
                // cargar 12,7

        } else if (diametro.value   == 20){
            clearConicidadList()
            createOption(15)

        } else if (diametro.value == 22){
            clearConicidadList()
            createOption(15)

        } else if (diametro.value == 25){
            clearConicidadList()
            createOption(15)
            createOption(19)
        } 
})




//// PRUEBAS


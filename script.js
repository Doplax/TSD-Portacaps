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

function changeReference() {
    const referencia  = document.getElementById("referencia")

    let isDiametroFill = Boolean(diametro.value);
    let isConicidadFill = Boolean(conicidad.value);
    let is_opcion_3_Fill = Boolean(opcion_3.value);


    if (is_opcion_3_Fill && isConicidadFill && isDiametroFill ) {
        referencia.innerHTML = diametro.value + conicidad.value + opcion_3.value
        
    } else { referencia.innerHTML = ".: REF :."   }
    


}

function clearConicidadList() {
    while (conicidad.firstChild) { conicidad.removeChild(conicidad.firstChild);} 
}

function createConicidadOption(optionValue) {
    let option = document.createElement("option");
    option.innerHTML = String(optionValue);
    conicidad.appendChild(option);
}

function checkChanges() {
      
    if          (diametro.value   == 19) {
        clearConicidadList()
        createConicidadOption(12.7)
        

    } else if (diametro.value == 20){
        clearConicidadList()
        createConicidadOption(15)

    } else if (diametro.value == 22){
        clearConicidadList()
        createConicidadOption(15)

    } else if (diametro.value == 25){
        clearConicidadList()
        createConicidadOption(15)
        createConicidadOption(19)
    } 
    changeReference()
}


/////////////////////////////////////////////////
const diametro = document.querySelector("#diametro")
diametro.addEventListener("change", () => { checkChanges()})

const conicidad = document.querySelector("#conicidad")
conicidad.addEventListener("change", () => { checkChanges()})

const opcion_3 = document.querySelector("#opcion_3")
opcion_3.addEventListener("click", () => { checkChanges()})









//// PRUEBAS


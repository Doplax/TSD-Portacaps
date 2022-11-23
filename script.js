
const listaDiametros = {
    // diametro 19 { 12,7 }
    // diametro 20 { 15 }
    // diametro 22 { 15 }
    // diametro 25 { 15,19 }
    19: { 
        conicidad: 12.7,
        L: [100, 150, 250]
    } ,
    20: {
        conicidad: 15,
        L: [80,150,250]
    },
    22: {
        conicidad: 15,
        L: [80,150,250]
    },
    25: {
        conicidad: [15,19],
        L: [100,200,325]
    }
}


function checkChanges() {
    // En vez de escribir un if por cada opcion, podemos hacer esto:
    for ( diametro in listaDiametros){
        
        if (diametroEscogido.value == diametro) {
                let conicidad = listaDiametros[diametro].conicidad
                console.log(conicidad);
                createConicidadOption(conicidad)
        }
    }

    changeReference();
    loadCotas()
}

function changeReference() {

    const referencia  = document.getElementById("referencia")

    let isDiametroFill = Boolean(diametro.value);
    let isConicidadFill = Boolean(conicidad.value);
    let is_opcion_3_Fill = Boolean(opcion_3.value);


    if (is_opcion_3_Fill && isConicidadFill && isDiametroFill ) {
        referencia.innerHTML = diametro.value + conicidad.value + opcion_3.value
        
    } else { referencia.innerHTML = ".: Refer :."   }
    
}

function createConicidadOption(optionValue) {
    clearConicidadList()

    let number = 1

    //  Llega 1 elemento
    if (typeof optionValue === typeof number ){
        let newOption = document.createElement("option");
        newOption.innerHTML = String(optionValue);
        conicidad.appendChild(newOption);    }

    //  Llega mas de uno
    else {
        optionValue.forEach((value) => {
            let newOption = document.createElement("option");
            newOption.innerHTML = String(value);
            conicidad.appendChild(newOption);
        })        
    }
}

function clearConicidadList() {
    while (conicidad.firstChild) { conicidad.removeChild(conicidad.firstChild);} 
}

function loadCotas() {
}

/////////////////////////////////////////////////
const diametroEscogido = document.querySelector("#diametro")
diametro.addEventListener("change", () => { checkChanges()})

const conicidad = document.querySelector("#conicidad")
conicidad.addEventListener("change", () => { checkChanges()})

const opcion_3 = document.querySelector("#opcion_3")
opcion_3.addEventListener("click", () => { checkChanges()})

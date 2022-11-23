
const data = {
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
    if          (diametro.value == 19) {
        createConicidadOption(12.7)

    } else if (diametro.value == 20){
        createConicidadOption(15)

    } else if (diametro.value == 22){
        createConicidadOption(15)

    } else if (diametro.value == 25){
        createConicidadOption(15,19)
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

function createConicidadOption(...optionValue) {
    clearConicidadList()

    optionValue.forEach((value) => {
        let newOption = document.createElement("option");
        newOption.innerHTML = String(value);
        conicidad.appendChild(newOption);
    })
    
}

function clearConicidadList() {
    while (conicidad.firstChild) { conicidad.removeChild(conicidad.firstChild);} 
}

function loadCotas() {

}

/////////////////////////////////////////////////
const diametro = document.querySelector("#diametro")
diametro.addEventListener("change", () => { checkChanges()})

const conicidad = document.querySelector("#conicidad")
conicidad.addEventListener("change", () => { checkChanges()})

const opcion_3 = document.querySelector("#opcion_3")
opcion_3.addEventListener("click", () => { checkChanges()})


let prueba = (...param) => {
    param.forEach(element => {
        console.log(element)
    })
}

prueba("hola","adios")
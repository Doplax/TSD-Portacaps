
const listaDiametros = {
    19: { 
        conicidad: [12.7],
        L: ["-",100, 150, 250]
    } ,
    20: {
        conicidad: [15],
        L: ["-",80,150,250]
    },
    22: {
        conicidad: [15],
        L: ["-",80,150,250]
    },
    25: {
        conicidad: ["-",15,19],
        L: ["-",100,200,325]
    }
}

function checkChangesDiametro() {
    // En vez de escribir un if por cada opcion, podemos hacer esto:
    for ( diametro in listaDiametros){
        if (diametroEscogido.value == diametro) {
            // Cargar opciones
                let conicidad = listaDiametros[diametro].conicidad
                createConicidadOption(conicidad)

                let LOption = listaDiametros[diametro].L
                createLongitudLOption(LOption)
        }
    }

    changeReference();
    loadCotas()
}

function checkChangesConicidad() {
    changeReference();
    loadCotas()
}
function checkChangesLongitudL() {
    changeReference();
    loadCotas()
}

function changeReference() {
    const referencia  = document.getElementById("referencia")
    let isDiametroFill = Boolean(diametroEscogido.value);
    let isConicidadFill = Boolean(conicidad.value);
    let isLongitudLFill = Boolean(longitudL.value);


    if (isLongitudLFill && isConicidadFill && isDiametroFill ) {
        referencia.innerHTML = diametroEscogido.value + conicidad.value + longitudL.value
        
    } else { referencia.innerHTML = ".: Refer :."   }
}

function createConicidadOption(optionValue) {
    clearListOptions(conicidad)

    optionValue.forEach((value) => {
        let newOption = document.createElement("option");
        newOption.innerHTML = String(value);
        conicidad.appendChild(newOption);
    })        
    
}

function createLongitudLOption(optionValue) {
    clearListOptions(longitudL)

    optionValue.forEach((value) => {
        let newOption = document.createElement("option");
        newOption.innerHTML = String(value);
        longitudL.appendChild(newOption);
    })        
    
}

function clearListOptions(lista) {
    while (lista.firstChild) { lista.removeChild(lista.firstChild);} 
}

function loadCotas() {
    let isDiametroFill = Boolean(diametroEscogido.value);

    if (isDiametroFill) {
        let cota1 = document.querySelector('.cotas p:nth-child(1)')
        cota1.innerHTML = diametroEscogido.value + "mm"
    }

    if (longitudL.value != "-") {
        let cota2 = document.querySelector('.cotas p:nth-child(2)')
        cota2.innerHTML = longitudL.value + "mm"
    }
}

/////////////////////////////////////////////////
const diametroEscogido = document.querySelector("#diametro")
diametroEscogido.addEventListener("change", () => { checkChangesDiametro()})

const conicidad = document.querySelector("#conicidad")
conicidad.addEventListener("change", () => { checkChangesConicidad()})

const longitudL = document.querySelector("#longitudL")
longitudL.addEventListener("click", () => { checkChangesLongitudL()})



//////////////

console.log("");



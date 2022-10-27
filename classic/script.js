const datos = [
    {id:"1",
    company:"Alfreds Futterkiste" , 
    contact:"Maria Anders",  
    country:"Germany"},

    {id:2,
    company:"Centro comercial Moctezuma", 
    contact:"Maria Anders",  
    country:"Germany"},

    {id:3,
    company:"Ernst Handel" , 
    contact:"Maria Anders",  
    country:"Germany"},

    {id:4,
    company:"Island Trading",
    contact:"Maria Anders",  
    country:"Germany"}    
]

// Montando la tabla
const createTable = (datos) => {
    let table = '<table border="1">' // Opening Table
    //Header
    table += (
        `<tr>
            <th>Caja</th>
            <th>${Object.keys(datos[0])[1]}</th>
            <th>${Object.keys(datos[0])[2]}</th>
            <th>${Object.keys(datos[0])[3]}</th>
        </tr>`)

    //Body
    datos.forEach((datos) =>{
        table += 
            `<tr>
                <td> <input type='checkbox' id=${datos.id}></td>
                <td>${datos.company}</td>
                <td>${datos.contact}</td>
                <td>${datos.country}</td>
             </tr>`
    })
    table += '</table>' // Closing Table
    document.getElementById("main").innerHTML = table;
}

createTable(datos)



// // Lo de los Eventos
// // window.fncEditCell = function(argThis) {
// //     alert('Row number of Row Clicked: ' + argThis.parentNode.rowIndex);
// // };


// ZONA DE PRUEBAS

// Para saber  que Checkbox ha sido pulsado
let input = document.getElementsByTagName('input')

for (let i=0; i < input.length; i++){
    console.log(input[i].type);
    input[i].addEventListener("change",(e) => {
        console.log(e.currentTarget);
    },false)
}

























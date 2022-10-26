const datos = [
    {id:1,
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
            <th>${Object.keys(datos[0])[1]}</th>
            <th>${Object.keys(datos[0])[2]}</th>
            <th>${Object.keys(datos[0])[3]}</th>
        </tr>`)

    //Body
    datos.forEach((datos) =>{
        table += 
            `<tr>
                <td>${datos.company}</td>
                <td>${datos.contact}</td>
                <td>${datos.country}</td>
             </tr>`
    })
    table += '</table>' // Closing Table
    document.getElementById("main").innerHTML = table;
}

createTable(datos)



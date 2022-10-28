const datos = [
    {id:1,
        L1:"Alfreds Futterkiste" , 
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },

    {id:2,
        L1:"Centro comercial ", 
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },

    {id:3,
        L1:"Ernst Handel" , 
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },

    {id:4,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:5,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:5,
        L1:"Iasdfasd",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:5,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    }
    
]
console.log(Object.keys(datos[0]).length);

const createTable = (datos) => {

    let table = '<table border="1">' // Opening Table
    //Header
    table += `<thead>
                        <tr>
                            <th>Caja</th>
                            <th>${Object.keys(datos[0])[1]}</th>
                            <th>${Object.keys(datos[0])[2]}</th>
                            <th>${Object.keys(datos[0])[3]}</th>
                            <th>${Object.keys(datos[0])[4]}</th>
                            <th>${Object.keys(datos[0])[5]}</th>
                            <th>${Object.keys(datos[0])[6]}</th>
                        </tr>
                    </thead>`
            /*Para cargar headers con For, pero lo he quitado por legibilidad
            for ( let index = 1; index < Object.keys(datos[0]).length ;index++)  
            {
                table += `<th>${Object.keys(datos[0])[index]}</th>`   
            }*/
    
    //Body
    datos.forEach((Element) =>{
        table += `<tr>
                            <td> <input type='checkbox' id=${Element.id}></td>
                            <td>${Element.L1}</td>
                            <td>${Element.L2}</td>
                            <td>${Element.L3}</td>
                            <td>${Element.A}</td>
                            <td>${Element.B}</td>
                            <td>${Element.C}</td>
                        </tr>`
    })
    table += '</table>' // Closing Table
    document.getElementById("main").innerHTML += table;
}

/////////////////////////////////   MAIN  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
createTable(datos)

// Para saber  que Checkbox ha sido pulsado
let input = document.getElementsByTagName('input')
// for (let i=0; i < input.length; i++){
//     input[i].addEventListener("change",(e) => {
//             if(e.currentTarget.checked) {
//                 console.log(e.currentTarget.checked);
//                 console.log(input[i].);
//                 document.getElementById("subtitulo").innerHTML = `  <p>El boton ${e.currentTarget.id}</p>
//                                                                                                         <p>AA</p>`
//             } else {
//                 document.getElementById("subtitulo").innerHTML = `<p>  </p>`
                
//             }
//     })
// }

// Lo que queiro es 

for (let i=0; i < input.length; i++){
    input[i].addEventListener("change",() => {
            if(input[i].checked) 
            {
                // Para desmarcar automaticamente  las anteriores
                for (let j=0; j< input.length; j++)
                {
                    if (input[i] != input[j]) { input[j].checked = false}
                }

                console.log(input[i]);
                document.getElementById("subtitulo").innerHTML = `  
                <p>L1 ${datos[i].L1}</p>
                <p>L2 ${datos[i].L2}</p>
                <p>L3 ${datos[i].L3}</p>
                <p>A ${datos[i].A}</p>
                <p>B ${datos[i].B}</p>
                <p>C ${datos[i].C}</p>

                `
            } 
            else 
            {
                document.getElementById("subtitulo").innerHTML = `<p>  </p>`
                
            }
    })
}


/////////////////////////// ZONA DE PRUEBAS \\\\\\\\\\\\\\\\\\\\\\\




























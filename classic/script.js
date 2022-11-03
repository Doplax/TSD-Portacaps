const datos = [
    {id:1,
        L1:"asdfasda" , 
        L2:"asdfasdf",  
        L3:"asdfasdf",
        A:"asdfasdf",
        B:"B",
        C:"asdfasdf"
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
    
    {id:6,
        L1:"Iasdfasd",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:7,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:8,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:9,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:10,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:11,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:12,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:13,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:14,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    },
    
    {id:15,
        L1:"Island Trading",
        L2:"Maria Anders",  
        L3:"Germany",
        A:"A",
        B:"B",
        C:"C"
    }
    
]

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
    table += `<tbody>`
    datos.forEach((Element) =>{
        table += `<tr>
                            <th> <input type='checkbox' id=${Element.id} ></th>
                            <td>${Element.L1}</td>
                            <td>${Element.L2}</td>
                            <td>${Element.L3}</td>
                            <td>${Element.A}</td>
                            <td>${Element.B}</td>
                            <td>${Element.C}</td>
                        </tr>`
    })
    table += `</tbody>
                </table>` // Closing Table
    document.getElementById("main").innerHTML += table;
}
function cargarCotas(i) {

    console.log(i);

            if(input[i].checked) 
            {
                // Para desmarcar automaticamente las anteriores
                for (let j=0; j< input.length; j++)
                {
                    if (input[i] != input[j]) { input[j].checked = false}
                }
                document.getElementById("subtitulo").innerHTML = `  
                <p >L1 ${datos[i].L1}</p>
                <p>L2 ${datos[i].L2}</p>
                <p>L3 ${datos[i].L3}</p>
                <p>A ${datos[i].A}</p>
                <p>B ${datos[i].B}</p>
                <p>C ${datos[i].C}</p>`
            } 
            else 
            {
                document.getElementById("subtitulo").innerHTML = `<p>  </p>`
                
            }
}


/////////////////////////////////   MAIN  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
createTable(datos) // Debe estar el primero, ya que si la tabla no carga, no podremos escuchar los TR ni los INPUT

const tr = document.getElementsByTagName("tr")
for (let i=0; i < tr.length; i++){  // Escuchar a todos los TR, usamos el for para que sea escalable y no tener que escribirlos todos uno a uno

    tr[i].addEventListener("click",() => {
         // Le quitamos 1 ya que TR comienza incluyendo el header, mientras que los inputs comienzan en el tr[1]
        input[i-1].checked = true
        cargarCotas(i-1) // 
    })
}

const input = document.getElementsByTagName("input") // Escuchar a todos los Input
for (let i=0; i < input.length; i++){ 
    input[i].addEventListener("change",() =>  {
        cargarCotas(i) 
    })
}





/////////////////////////// ZONA DE PRUEBAS \\\\\\\\\\\\\\\\\\\\\\\


// for (let i=0; i < tr.length; i++){
//     tr[i].addEventListener("click",() => {
//         input[i-1].checked= true;

//         for (let j=0; j< input.length; j++)
//         {
//             if (input[i-1] != input[j]) { input[j].checked = false}
//         }


        

//         })
//     }





/*
Que necesito?

;

*/




















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

const datos = [
    {ID:0,
        A:"19",
        B:"12,7",
        L1:"L1",
    },
    {ID:1,
        A:"19",
        B:"12,7 ",
        L1:"L2",
    },
    {ID:2,
        A:"19",
        B:"12,7",
        L1:"L3",
    },

    {ID:3,
        A:"20",
        B:"12,7",
        L1:"L1",
    },
    {ID:4,
        A:"20",
        B:"12,7",
        L1:"L2",
    },
    {ID:5,
        A:"20",
        B:"12,7",
        L1:"L3",
    },

    {ID:6,
        A:"22",
        B:"15",
        L1:"L1",
    },
    {ID:7,
        A:"22",
        B:"15",
        L1:"L1",
    },
    {ID:8,
        A:"22",
        B:"15",
        L1:"L1",
    },


    {ID:9,
        A:"25",
        B:"15",
        L1:"L1",
    },
    {ID:10,
        A:"25",
        B:"15",
        L1:"L1",
    },
    {ID:11,
        A:"25",
        B:"15",
        L1:"L1",
    },

    {ID:12,
        A:"25",
        B:"19",
        L1:"L1",
    },
    {ID:13,
        A:"25",
        B:"19",
        L1:"L2",
    },
    {ID:14,
        A:"25",
        B:"19",
        L1:"L3",
    }
]

const createTable = (datos) => {


    let table = '<table border="1">' // Opening Table
    //Header
    table += `<thead>
                        <th>  </th>
                        <th> A (Diametro) </th>
                        <th> Conicidad </th>
                        <th> L </th>
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
                            <th> <input type='checkbox' id=${Element.ID} ></th>
                            <td>${Element.A}</td>
                            <td>${Element.B}</td>
                            <td>${Element.L1}</td>
                        </tr>`
    })
    table += `</tbody>
                </table>` // Closing Table
    document.getElementById("main").innerHTML += table;

//     <tr>
//     <th>Caja</th>
//     <th>${Object.keys(datos[0])[1]}</th>
//     <th>${Object.keys(datos[0])[2]}</th>
//     <th>${Object.keys(datos[0])[3]}</th>
//     <th>${Object.keys(datos[0])[4]}</th>
//     <th>${Object.keys(datos[0])[5]}</th>
//     <th>${Object.keys(datos[0])[6]}</th>
// </tr>

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
                <p>L1: ${datos[i].L1}</p>
                <p>L2: ${datos[i].L2}</p>
                <p>L3: ${datos[i].L3}</p>
                <p>A: ${datos[i].A}</p>
                <p>B: ${datos[i].B}</p>
                <p>C: ${datos[i].C}</p>`
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

const input = document.getElementsByTagName("input") // Escuchar a todos los Input para cargar las cotas
for (let i=0; i < input.length; i++){ 
    input[i].addEventListener("change",() =>  {
        cargarCotas(i) 
    })
}

/////////////////////////// ZONA DE PRUEBAS \\\\\\\\\\\\\\\\\\\\\\\



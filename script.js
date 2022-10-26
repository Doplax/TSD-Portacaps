const tesume_table = document.getElementById("rwd-table-id");

const tableRows = document.querySelectorAll('tr.row')




for (let index = 0; index < tableRows.length; index++) {
    const row = tableRows[index];
    const status = row.querySelector('.status');
    console.log(row,status);
    
}




function createTable() {

    let numRows = document.getElementById('rows').value;
    let numCols = document.getElementById('cols').value;
    let tableHeader = '<table border="1">';
    let tableBody = '';

    for( let i = 0; i < numRows; i++)
    {
        tableBody += '<tr>';
        for( let j = 0; j < numCols; j++)
        { 
            tableBody += '<td>';
            tableBody += 'Cell ' + (i+1) + ',' + (j+1);
            tableBody += '</td>'
        }
        tableBody += '</tr>\n';
    }
    
    document.getElementById('wrapper').innerHTML = tableHeader + tableBody;
}


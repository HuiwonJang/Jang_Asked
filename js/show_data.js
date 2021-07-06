$.ajax({
  url: 'https://huiwonjang.github.io/Jang_Asked/data/asked_data.csv',
  dataType: 'text'
}).done(successFunction);

function successFunction(data){
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table>';

  for (var singleRow = 0; singleRow < allRows.length; singleRow++){
    table += '<tr>';

    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++){
      table += '<td>';
      table += rowCells[rowCell];
      table += '</td>';
    }
    table += '<\tr>';
  }
  table += '</tbody>';
  table += '</table>';

  $('#div_qnas').append(table);
}

$(document).ready(function(){
  var table="";
for(var row=0;row<8;row++)
{
  table += '<tr>';
  for(var column=0;column<8;column++)
  {
    table+='<td class="black"></td>';
  }
  table+='</tr>';
}
$('#chessboard').html(table);



});

/**
 * @author Tom 'heartemoji' Amaral
 * @desc Main script file for the index page
*/

var inField;
var outField;
var terminal;

$(document).ready(function(){
  inField = $('#inField');
  outField = $('#outField');
  terminal = $('#terminal');

  terminal.on('submit', function(e){
    var oldText = outField.val();
    outField.val(oldText + inField.val() + '\n');
    outField.scrollTop(outField[0].scrollHeight);

    inField.val("");
    e.preventDefault();
  });


});

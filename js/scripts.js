$(document).ready(function() {
  
  $("#harold").click(function(event) {
    event.preventDefault();

    var userInput = $("#words").val(); 
    var seperate = userInput.split("");
    alert(seperate);
  });

});
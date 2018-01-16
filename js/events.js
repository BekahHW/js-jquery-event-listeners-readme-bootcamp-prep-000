//define functions here


function getIt(){
  $('p').click(function(){
    alert("Hey!");
   
});
  
  // function frameIt(){ 
  
    
    function pressIt(){
       $('#typing').on('keydown', function(key) {
 if(key.which == 71){
     alert('G was pressed');
 }
});


function submitIt(){
  $("form").on("submit", function() {
 if ($( "input:first" ).val() === "correct") {
   alert('Your form is going to be submitted now.');
   return;
 }

});

}

$(document).ready(function(){
});



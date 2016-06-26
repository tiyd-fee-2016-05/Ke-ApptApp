$( function() {
  "use strict";

  $( document ).ready( function() {
    console.log( JSON.parse(localStorage.getItem("appointments")));

    console.log( JSON.parse(localStorage.getItem("tempIndex")));
    var tempIndex = JSON.parse(localStorage.getItem("tempIndex"));

    var date = JSON.parse( localStorage.getItem("appointments").split() );
    $( "h1" ).text( date[tempIndex].title );
    $( ".appointment-heading" ).text( date[tempIndex].date + " @ " );
    $( ".appointment-time" ).text( date[tempIndex].time );
  }); // end document.ready

  $('.left-arrow').on('click', function (e){
  e.preventDefault
  window.location = 'index.html';
});

$('.edit').on('click', function (e){
e.preventDefault
window.location = 'appt.html';
});
}) // end outmost function





















// thank you , http://stackoverflow.com/questions/8127075/localstorage-json-how-can-i-delete-only-1-array-inside-a-key-since-localstora for your help
// var currentObject = JSON.parse(localStorage.getItem("appointments"));
// currentObject.splice( tempIndex, 1 );
// localStorage["appointments"] = JSON.stringify(currentObject);
// console.log( JSON.parse(localStorage.getItem("appointments")));

$( function() {
  "use strict";

  $( document ).ready( function() {
    console.log( JSON.parse(localStorage.getItem("appointments")));
    var date = JSON.parse( localStorage.getItem("appointments").split() );
    $( ".appointment-heading" ).text( date[0].date + " @ " );
    $( ".appointment-time" ).text( date[0].time );
  }); // end document.ready
}) // end outmost function

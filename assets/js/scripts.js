$( function() {
  "use strict";

  $( document ).ready( function() {
    var date = JSON.parse( localStorage.getItem( "appointments" ).split() );
    console.log( date.length );

    for( var index = 0; index < date.length; index++ ) {
       date[index].time ;
      $( ".appointment-title" ).text( date[index].title );
      $( ".appointment-location--printout" ).text( "@ " + date[index].cityState );
    } // end for loop
    // $( ".appointments-time--prinout" ).text( date[0].time );
    // $( ".appointment-title" ).text( date[0].title );
    // $( ".appointment-location--printout" ).text( "@ " + date[0].cityState );
  }); // end document.ready()

  $( ".fa-plus" ).on( "click", function(e) {
    e.preventDefault;
    window.location = "new-appt.html";
  } ) // end fa-plus click event
}) // end outmost function


var giphyImg = $( "<img>" ).attr( "src", data.data[randomNum].images.fixed_height.url );
$( "<div></div>" ).attr( "class", "botTalkBubble" ).html( giphyImg ).appendTo( "main" );

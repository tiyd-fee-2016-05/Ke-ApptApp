$( function() {
  
  "use strict";

  $( document ).ready( function() {
    console.log( JSON.parse(localStorage.getItem("appointments")));
    console.log( JSON.parse(localStorage.getItem("tempIndex")));
    // grab the index that was clicked on in index.html
    var tempIndex = JSON.parse(localStorage.getItem("tempIndex"));
    // grab the data in localStorage and separate into object
    var date = JSON.parse( localStorage.getItem("appointments").split() );
    // populate input fields on page with specific object data
    $( "h1" ).text( date[tempIndex].title );
    $( ".appointment-heading" ).text( date[tempIndex].date + " @ " );
    $( ".appointment-time" ).text( date[tempIndex].time );
    $( "figcaption" ).text( date[tempIndex].cityState );
  }); // end document.ready

  // arrow at top takes you back to index.html
  $('.left-arrow').on('click', function (e){
    e.preventDefault
    window.location = 'index.html';
  });

  // edit button at bottom takes you to appt.html
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

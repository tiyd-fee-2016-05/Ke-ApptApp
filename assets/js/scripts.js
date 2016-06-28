$( function() {
  
  "use strict";

  // GLOBAL VARIABLES
  var apptList = $( ".appointment-info--list" );
  var listItems = $( "li" );

  $( document ).ready( function() {
    // grab the data in localStorage and separate into object
    var date = JSON.parse( localStorage.getItem( "appointments" ).split() );
    console.log( date.length );

    // loop through the array of "appointments" and append the appropriate data to individual list items
    for( var index = 0; index < date.length; index++ ) {
      var weatherLoc = date[index].cityState.split( "," );
      console.log( weatherLoc );

      // begin weatherunderground GET request
      $.ajax( {
        datatype: "json",
        url: "http://api.wunderground.com/api/a4a7ba047e303c3b/conditions/q/" + weatherLoc[1] + "/" + weatherLoc[0] + ".json",
        method: "GET",
        } ) // end ajax GET request
        // if request is successful
        .done( function(data) {
          console.log( data );
        });

      // build up list of elements to append to the ul
      var timeLi = $( "<li></li>" ).html( "<h2 class='appointments-time--prinout'>" + date[index].time + "</h2><img src='apptList[index]' class='weatherIcon'>
                      <div class='appointment-title'>" + date[index].title + "</div><p class='appointment-location--printout'>" + date[index].cityState +
                      "</p>").appendTo( ".appointment-info--list" );
    } // end for loop
  }); // end document.ready()

  // for whatever list item you click, localStorage is updated with the index of that item
  $( ".appointment-info--list" ).on( "click", "li", function() {
    console.log( $( this ).index() + " clicked" );
    localStorage.setItem( "tempIndex", JSON.stringify( $(this).index() ) );
    window.location = "weather-map.html";
  }) //end li click event

  $( ".fa-plus" ).on( "click", function(e) {
    e.preventDefault;
    window.location = "new-appt.html";
  } ) // end fa-plus click event
}) // end outmost function

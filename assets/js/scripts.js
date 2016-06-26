$( function() {
  "use strict";

  var apptList = $( ".appointment-info--list" );

  $( document ).ready( function() {
    var date = JSON.parse( localStorage.getItem( "appointments" ).split() );

    console.log( date.length );

    for( var index = 0; index < date.length; index++ ) {
      var weatherLoc = date[index].cityState.split( "," );
      console.log( weatherLoc );

      // begin foursquare GET request
      $.ajax( {
        datatype: "json",
        url: "http://api.wunderground.com/api/a4a7ba047e303c3b/conditions/q/" + weatherLoc[1] + "/" + weatherLoc[0] + ".json",
        method: "GET",
        } ) // end ajax GET request

        // if request is successful
        .done( function(data) {
        // var weatherIcon = $( "<img>" ).attr( "src", data.current_observation.icon_url ).addClass( "weatherIcon").appendTo(".appointment-info--list");
        // $( apptList[index] ).append( weatherIcon );
        // var timeLi = $( "<li></li>" ).html( "<h2 class='appointments-time--prinout'>" + date[index].time + "</h2><img src='apptList[index]' class='weatherIcon'><div class='appointment-title'>"
        //               + date[index].title + "</div><p class='appointment-location--printout'>" + date[index].cityState + "</p>").appendTo( ".appointment-info--list" );
        // timeli = $( "<img src='apptList[index]' class='weatherIcon'><div class='appointment-title'>").append( weatherIcon);
        console.log( data );
      });

      var timeLi = $( "<li></li>" ).html( "<h2 class='appointments-time--prinout'>" + date[index].time + "</h2><img src='apptList[index]' class='weatherIcon'><div class='appointment-title'>"
                    + date[index].title + "</div><p class='appointment-location--printout'>" + date[index].cityState + "</p>").appendTo( ".appointment-info--list" );
      // timeli = $( "<img src='apptList[index]' class='weatherIcon'><div class='appointment-title'>").append( weatherIcon);
  } // end for loop
  }); // end document.ready()

  var listItems = $( "li" );

  $( ".appointment-info--list" ).on( "click", "li", function() {
    // thank you, http://stackoverflow.com/questions/5545283/get-index-of-clicked-element-in-collection-with-jquery for your help
        console.log( $( this ).index() + " clicked" );
        localStorage.setItem( "tempIndex", JSON.stringify( $(this).index()));
        window.location = "weather-map.html";

  }) //end li click event

  $( ".fa-plus" ).on( "click", function(e) {
    e.preventDefault;
    window.location = "new-appt.html";
  } ) // end fa-plus click event
}) // end outmost function

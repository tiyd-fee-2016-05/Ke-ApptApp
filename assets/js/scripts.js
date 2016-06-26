$( function() {
  "use strict";

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
        var currentConditionsIcon = data.current_observation.icon_url;
        // var currentTemp = data.current_observation.feelslike_string;
        // var weatherIcon = $( "<img>" ).attr( "src", data.current_observation.icon_url ).addClass( "weatherIcon");
        // console.log( "http://api.wunderground.com/api/a4a7ba047e303c3b/conditions/q/" + userMessage[1] + ".json" );
        // console.log( currentTemp );
        // console.log( data.current_observation.icon_url );
        // var weatherString = $( "<div></div>" ).attr( "class", "botTalkBubble" ).text( "Your weather is a comfortable " + currentTemp + " ");
        // weatherString.prepend( weatherIcon ).appendTo( "main" );
        console.log( data );
      });







      // $( ".appointment-title" ).text( date[index].title );
      // $( ".appointment-location--printout" ).text( "@ " + date[index].cityState );

// class = "weatherIcon" src ="assets/images/weather-icons-partly-sun.png">

      // var weatherIcon = $( "<img>" ).attr( "src", data.current_observation.icon_url ).addClass( "weatherIcon");
      // var weatherIcon = $( "<img>" ).attr( "src", "assets/images/weather-icons-partly-sun.png" ).addClass( "weatherIcon");
      // var domTime = $( "<h2></h2>" ).attr( "class", "appointments-time--prinout" ).text( date[index].time );
      // var domTitle = $( "<h3></h3>" ).attr( "class", "appointment-title" ).text( date[index].title );
      // var timeDiv = $( "<div></div>" ).attr( "class", "appointments-time" ).html( domTime );
      // var timeLi = $( "<li></li>" ).html( timeDiv ).html( domTitle );
      var timeLi = $( "<li></li>" ).html( "<h2 class='appointments-time--prinout'>" + date[index].time + "</h2><img src='assets/images/weather-icons-partly-sun.png' class='weatherIcon'><div class='appointment-title'>"
                    + date[index].title + "</div><p class='appointment-location--printout'>" + date[index].cityState + "</p>").appendTo( ".appointment-info--list" );
      // var timeUl = $( "<ul></ul>" ).attr( "class", "appointment-info--list" ).html( timeLi );
      // var apptDiv = $( "<div></div>" ).attr( "class", "appointment-info" ).html( timeUl );
      // var apptSpan = $( "<span></span>" ).attr( "class", "appointment-info--list-item" ).html( apptDiv ).appendTo( ".wrapper" );

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

// var domTime = $( "<h2></h2>" ).attr( "class", "appointments-time--prinout" );
// var timeDiv = $( "<div></div>" ).attr( "class", "appointments-time" ).html( domTime );
// var timeLi = $( "<li></li>" ).html( timeDiv );
// var timeUl = $( "<ul></ul>" ).attr( "class", "appointment-info--list" ).html( timeLi );
// var apptDiv = $( "<div></div>" ).attr( "class", "appointment-info" ).html( timeUl );
// var apptSpan = $( "<span></span>" ).attr( "class", "appointment-info--list-item" ).html( apptDiv ).appendTo( ".wrapper" );


// var giphyImg = $( "<img>" ).attr( "src", data.data[randomNum].images.fixed_height.url );
// $( "<div></div>" ).attr( "class", "botTalkBubble" ).html( giphyImg ).appendTo( "main" );


// // begin foursquare GET request
//       $.ajax( {
//         datatype: "json",
//         url: "http://api.wunderground.com/api/a4a7ba047e303c3b/conditions/q/" + weatherState + "/" + weatherCity + ".json",
//         method: "GET",
//       } ) // end ajax GET request
//
//       // if request is successful
//       .done( function(data) {
//         var currentTemp = data.current_observation.feelslike_string;
//         var weatherIcon = $( "<img>" ).attr( "src", data.current_observation.icon_url ).addClass( "weatherIcon");
//         console.log( "http://api.wunderground.com/api/a4a7ba047e303c3b/conditions/q/" + userMessage[1] + ".json" );
//         console.log( currentTemp );
//         console.log( data.current_observation.icon_url );
//         var weatherString = $( "<div></div>" ).attr( "class", "botTalkBubble" ).text( "Your weather is a comfortable " + currentTemp + " ");
//         weatherString.prepend( weatherIcon ).appendTo( "main" );

$( function() {
  
  "use strict";

  // GLOBAL VARIABLES
  var apptTitle, apptStreet, apptCityState, apptDate, apptTime;
  var bookedDates = [];
  var bookedTimes = [];
  var locStorage;
  var apptObj;
  var storageApptCombo;
  var clicks = 0;
  var storageArray;

  /*
    BEGIN TABBING EVENTS
  */
  $( document ).ready( function() {
    $( ".title" ).focus();
  });

  $( ".title" ).keypress( function(e) {
    // e.preventDefault();
    if( e.which === 9 ) {
      $( ".street" ).focus();
    }
  }) // end keypress event

  $( ".street" ).keypress( function(e) {
    // e.preventDefault();
    if( e.which === 9 ) {
      $( ".city-state" ).focus();
    }
  }) // end keypress event

  $( ".city-state" ).keypress( function(e) {
    // e.preventDefault();
    if( e.which === 9 ) {
      $( ".date" ).focus();
    }
  }) // end keypress event

  $( ".date" ).keypress( function(e) {
    // e.preventDefault();
    if( e.which === 9 ) {
      $( ".time" ).focus();
    }
  }) // end keypress event

  $( ".time" ).keypress( function(e) {
    // e.preventDefault();
    if( e.which === 9 ) {
      // $( ".time" ).focus();
    }
  }) // end keypress event

  // thank you http://amsul.ca/pickadate.js/ for your amazing date widget
  $ ( ".date" ).on( "click", function(e) {
    e.preventDefault();
    $( ".date" ).pickadate({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true, //this option for allowing user to select from year range
      format: 'mmmm, d yyyy'
    });
  }) // end date field click event

  // thank you http://amsul.ca/pickadate.js/ for your amazing time widget
  $ ( ".time" ).on( "click", function(e) {
    e.preventDefault();
    $( ".time" ).pickatime({
    });
  }) // end date field click event

  // when you click on the footer, it will save the data in the input fields to localStorage variable named "appointments"
  $( "footer" ).on( "click", function(e) {
    e.preventDefault();
    apptTitle = $( ".title[name='title']" ).val();
    apptStreet = $( ".street[name='street']" ).val();
    apptCityState = $( ".city-state[name='city-state']" ).val();
    apptDate = $( ".date[name='date']" ).val();
    bookedDates.push( apptDate );
    apptTime = $( ".time[name='time']" ).val();
    bookedTimes.push( apptTime );
    // console.log( title + " " + street + " " + cityState + " " + date + " " + time );
    locStorage = JSON.parse(localStorage.getItem( "appointments" ) );
    apptObj = { title: apptTitle, street: apptStreet, cityState: apptCityState, date: apptDate, time: apptTime };
    console.log( bookedDates );

    // thank you, http://stackoverflow.com/questions/19174525/how-to-store-array-in-localstorage-object-in-html5 for your help for "if" and "else"
    if (localStorage.getItem( "appointments" ) === null ) {
      storageArray = [apptObj];
      localStorage.setItem( "appointments", JSON.stringify(storageArray));
    }

    // thank you, http://stackoverflow.com/questions/17970202/find-and-compare-array-values, for your help
    // else if( bookedDates.indexOf( apptDate)  !== -1 && bookedTimes.indexOf( apptTime ) !== -1 ) {
    //   console.log( "That date and time is already taken" );
    //   console.log( bookedDates[0] );
    //   // alert( "That date and time is already taken.  Please pick another date." );
    // }

    else {
      storageArray = locStorage;
      storageArray.push( apptObj );
      localStorage.removeItem( "appointments" );
      localStorage.setItem( "appointments", JSON.stringify(storageArray));
     }

     localStorage.removeItem( "appointments" );
     localStorage.setItem( "appointments", JSON.stringify(storageArray));

    // console.log( locStorage );
    locStorage;
    clicks++;

    // thank you, http://stackoverflow.com/questions/17565401/html-button-navigate-to-other-page-different-approaches, for correct wording
    window.location = "index.html";
  });

}) // end outmost function

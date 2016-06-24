$( function() {
  "use strict";

  var apptTitle, apptStreet, apptCityState, apptDate, apptTime;
  var locStorage = {};
  var apptObj = {};
  var storageApptCombo = [];

  // function getLocalStorage() {
  //   locStorage = JSON.parse(localStorage.getItem( "appointments" ) );
  // }

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

  $ ( ".date" ).on( "click", function(e) {
    e.preventDefault();
    $( ".date" ).pickadate({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
  }) // end date field click event

  $ ( ".time" ).on( "click", function(e) {
    e.preventDefault();
    $( ".time" ).pickatime({
    });
  }) // end date field click event

  $( "footer" ).on( "click", function(e) {
    e.preventDefault();
    apptTitle = $( ".title[name='title']" ).val();
    apptStreet = $( ".street[name='street']" ).val();
    apptCityState = $( ".city-state[name='city-state']" ).val();
    apptDate = $( ".date[name='date']" ).val();
    apptTime = $( ".time[name='time']" ).val();
    // console.log( title + " " + street + " " + cityState + " " + date + " " + time );
    locStorage = JSON.parse(localStorage.getItem( "appointments" ) );
    console.log( locStorage );
    apptObj = { title: apptTitle, street: apptStreet, cityState: apptCityState, date: apptDate, time: apptTime };
    storageApptCombo.push( locStorage );
    storageApptCombo.push( apptObj );
    localStorage.setItem( "appointments", JSON.stringify(storageApptCombo) );
    storageApptCombo = [];
    // localStorage.setItem( "title", title );
    // localStorage.setItem( "street", street );
    // localStorage.setItem( "city, state", cityState );
    // localStorage.setItem( "date", date );
    // localStorage.setItem( "time", time );
  });

}) // end outmost function

$( function() {
  "use strict";

  var title, street, cityState, date, time;

  $( document ).ready( function() {
    $( ".title" ).focus();
  });

  $( ".title" ).keypress( function(e) {
    e.preventDefault;
    if( e.which === 9 ) {
      $( ".street" ).focus();
    }
  }) // end keypress event

  $( ".street" ).keypress( function(e) {
    e.preventDefault;
    if( e.which === 9 ) {
      $( ".city-state" ).focus();
    }
  }) // end keypress event

  $( ".city-state" ).keypress( function(e) {
    e.preventDefault;
    if( e.which === 9 ) {
      $( ".date" ).focus();
    }
  }) // end keypress event

  $( ".date" ).keypress( function(e) {
    e.preventDefault;
    if( e.which === 9 ) {
      $( ".time" ).focus();
    }
  }) // end keypress event

  $( ".time" ).keypress( function(e) {
    e.preventDefault;
    if( e.which === 9 ) {
      // $( ".time" ).focus();
    }
  }) // end keypress event

  $ ( ".date" ).on( "click", function(e) {

    $( ".date" ).pickadate({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });


  })

  $( "footer" ).on( "click", function(e) {
    e.preventDefault();
    title = $( ".title[name='title']" ).val();
    street = $( ".street[name='street']" ).val();
    cityState = $( ".city-state[name='city-state']" ).val();
    date = $( ".date[name='date']" ).val();
    time = $( ".time[name='time']" ).val();
    console.log( title + " " + street + " " + cityState + " " + date + " " + time );
    localStorage.setItem( "title", title );
    localStorage.setItem( "street", street );
    localStorage.setItem( "city, state", cityState );
    localStorage.setItem( "date", date );
    localStorage.setItem( "time", time );
  });

}) // end outmost function

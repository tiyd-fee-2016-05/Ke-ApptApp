$( function() {

  "use strict";

  // GLOBAL VARIABLES
  var date, tempIndex;

  $(document).ready( function() {
  // grab the data in localStorage and separate into object
  date = JSON.parse( localStorage.getItem("appointments").split() );
  // grab the index that was clicked on in index.html
  tempIndex = JSON.parse(localStorage.getItem("tempIndex"));
  console.log( date[tempIndex] );

  // populate input fields on page with specific object data
  $('.title').val(date[tempIndex].title);
  $('.street').val(date[tempIndex].street);
  $('.city-state').val(date[tempIndex].cityState);
  $('.date').val(date[tempIndex].date);
  $('.time').val(date[tempIndex].time);
}); // end document.ready()

  //Delete appointment from the local storage
$('.deleteButton').on('click', function (e){
  e.preventDefault
  var confirmDelete = confirm("Are you sure you want to delete this appointment?");

  // if user clicks "yes", remove 1 object from current array position (remove this object)
  if (confirmDelete == true) {
    var deletedObject = JSON.parse(localStorage.getItem("appointments"));
    deletedObject.splice( tempIndex, 1 );
    // update entire "appointments" array to reflect deleted object
    localStorage["appointments"] = JSON.stringify(deletedObject);
    console.log( JSON.parse(localStorage.getItem("appointments")));
    console.log( deletedObject );
  }
  window.location = 'index.html';
}); // end delete click event

// edit info on page
  $('.saveButton').on('click', function(e){
    e.preventDefault

    // very similar to new-appt.js where we initially stored the data
    var apptTitle, apptStreet, apptCityState, apptDate, apptTime;
    var locStorage;
    var apptObj;
    var storageArray;
    apptTitle = $( ".title[name='titleInput']" ).val();
    apptStreet = $( ".street[name='street']" ).val();
    apptCityState = $( ".city-state[name='city-state']" ).val();
    apptDate = $( ".date[name='date']" ).val();
    apptTime = $( ".time[name='time']" ).val();

    locStorage = JSON.parse(localStorage.getItem( "appointments" ) );
    // updated object
    apptObj = { title: apptTitle, street: apptStreet, cityState: apptCityState, date: apptDate, time: apptTime };
    // remove 1 object from current position and replace it with the updated data
    // thank you, https://github.com/torihedden/AppointmentApp/blob/master/assets/js/scripts.js for your inspiration
    locStorage.splice( tempIndex, 1, apptObj );
    localStorage.setItem( "appointments", JSON.stringify(locStorage));

    alert("Your changes have been saved");
    window.location = 'index.html';
  }); // end save click event

  // arrow at top takes you back to index.html
  $('.left-arrow').on('click', function (e){
    e.preventDefault
    window.location = 'index.html';
  });
}) // end outmost function

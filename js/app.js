//populate information to page
$('appt.html').on('load', function (e){
  e.preventDefault
$('.title').text(date[tempIndex].title);//what is the actual name for this in the object?
$('.street').text(date[tempIndex].cityState);//what is the actual name for this in the object?
$('.date').text(date[tempIndex].date);
$('.time').text(date[tempIndex].time);
console.log("Appointment info run");
});

//load previous page
$('.left-arrow').on('click', function (e){
  e.preventDefault
  window.location = 'index.html';
});


//Delete appointment from the local storage (WITHOUT THE ACTUAL FUNCTIONALITY)
$('.deleteButton').on('click', function (e){
  e.preventDefault
  var confirmDelete = confirm("Are you sure you want to delete this appointment?");
  if (confirmDelete == true) {
      window.location = 'index.html';
  } else {
  }


});


$('.saveButton').on('click', function(e){
  e.preventDefault
  alert("Your changes have been saved");
  window.location = 'index.html';
});


$('.editAppointment').on('click', function (e){
  e.preventDefault
  window.location = 'appt.html'
});

//load previous page
$('.left-arrow').on('click', function (e){
  e.preventDefault
  window.location = 'index.html';
});


//Delete appointment from the local storage
$('.deleteButton').on('click', function (e){
  e.preventDefault
  var confirmDelete = confirm("Are you sure you want to delete this appointment?");
  if (confirmDelete == true) {
      // x = "Appointment has been deleted";
      //Tell local storage to delete item
  } else {
  }
  window.location = 'index.html';
});


$('.saveButton').on('click', function(e){
  e.preventDefault
  alert("Your changes have been saved");
  window.location = 'index.html';
});

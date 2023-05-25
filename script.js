 $(window).on('load', function() {
   $('.modal').modal('show');
 });
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip({
      delay: {show: 500, hide: 500},
      html: true,
      placement: 'bottom',
  });


 });


function onFormSubmit(e) {
	event.preventDefault();
  let empname = document.getElementById("employeeName");
  if (empname.value!="") {
    
    var formData = readFormData();
    if (selectedRow == null){
      insertNewRecord(formData);
    }
    else{
      updateRecord(formData);
    }   
  }
  else{
    alert("Employee Name shoud not be blank");
  }
  $('.modal').modal('show');
    
}


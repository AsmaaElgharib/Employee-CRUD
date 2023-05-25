//Edit the data
selectedRow = null;
   function onEdit(td) {
       selectedRow = td.parentElement.parentElement;
       document.getElementById("employeeId").value    = selectedRow.cells[0].innerHTML;
       document.getElementById("employeeName").value  = selectedRow.cells[1].innerHTML;
       document.getElementById("DOB").value           = selectedRow.cells[2].innerHTML;
       document.getElementById("department").value    = selectedRow.cells[3].innerHTML;
       document.getElementById("photo").value         = selectedRow.cells[4].innerHTML;
       document.getElementById("netSalary").value     = selectedRow.cells[5].innerHTML;
   } 
function updateRecord(formData) {
       selectedRow.cells[0].innerHTML = formData.employeeId;
       selectedRow.cells[1].innerHTML = formData.employeeName;
       selectedRow.cells[2].innerHTML = formData.DOB;
       selectedRow.cells[3].innerHTML = formData.department;
       selectedRow.cells[4].innerHTML = formData.photo;
       selectedRow.cells[5].innerHTML = formData.netSalary;
  
  }
    

 readFormData = function () {
       formData = {};
      formData["employeeId"]   =  document.getElementById("employeeId").value; 
      formData["employeeName"] =  document.getElementById("employeeName").value;
      formData["DOB"]          =  document.getElementById("DOB").value;
      formData["department"]   =  document.getElementById("department").value;
      formData["photo"]        =  document.getElementById("photo").value;
      formData["netSalary"]    =  document.getElementById("netSalary").value;
      console.log(formData);
      return formData;
  }

var selectedRow = null;
let onFormSubmit =function (e){
//     event.preventDefault();
//     let formData = readFormData();
//     if(selectedRow === null){
//         insertNewEmployee(formData);

    
    let formData ={};
    formData.employeeId = document.getElementById("employeeId").value;
    formData.employeeName = document.getElementById("employeeName").value;
    formData.DOb = document.getElementById("DOB").value;
    formData.department = document.getElementById("department").value;
    formData.NetSalary = document.getElementById("NetSalary").value;
    formData.grossSalary = document.getElementById("grossSalary").value;
    console.log(formData);
    return formData;

}

//Retrieve the Data
let readFormData = function () {
    let formData ={};
    formData.employeeId = document.getElementById("employeeId").value;
    formData.employeeName = document.getElementById("employeeName").value;
    formData.DOb = document.getElementById("DOB").value;
    formData.department = document.getElementById("department").value;
    formData.NetSalary = document.getElementById("NetSalary").value;
    formData.grossSalary = document.getElementById("grossSalary").value;
    return formData;
}

//Insert The Data
let insertNewEmployee= function(data){
    let table = document.getElementById("empList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.employeeId;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.employeeName
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.department;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.DOb;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.NetSalary;
    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.grossSalary;
}
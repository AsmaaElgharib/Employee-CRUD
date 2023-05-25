//Insert
function insertNewRecord(data) {
    var table = document.getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.employeeId;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.employeeName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.DOB;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.department;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.photo;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.netSalary;
    let grossSal = parseInt(data.netSalary);
    cell7 = newRow.insertCell(6);
		cell7.innerHTML = grossSal + 1342;
    cell7 = newRow.insertCell(7);
        cell7.innerHTML = `<button  onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this) ">Delete</button>`;
}
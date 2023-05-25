function onDelete(id) {
    if (confirm('Do you want to delete this record?')) {
        row = id.parentElement.parentElement;
        document.getElementById('empList').deleteRow(row.rowIndex);
        resetForm();
    }
}
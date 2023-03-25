import { empoyeesData } from "./main.js";
import { employeesTable } from "./employeesTable.js";

const tbody = document.querySelector('.employeeTbody');

// function to delete row from table and to delete employee from data
export function deleteRow(event) {
    if (event.target.classList.contains('deleteData')) {
        // identify the object ID that will be deleted
        let objectId = event.target.parentElement.parentElement.getAttribute('id');

        // find the object index in array-empoyeesData 
        let index = empoyeesData.read.findIndex(object => object.employeeId === objectId);

        // call delete method to delete selected object 
        empoyeesData.delete(empoyeesData.read[index]);

        // call function to display updated table
        if (empoyeesData.read.length === 0) {
            tbody.innerHTML = '';
        }
        employeesTable(empoyeesData);
    }
}

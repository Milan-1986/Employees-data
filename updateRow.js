import { Employee } from "./Employee.js";
import { empoyeesData } from "./main.js";

// function to update data by changing the data in the table and to update the object in storage with same data
export function updateRow(event) {
    if (event.target.classList.contains('updateData')) {
        //Use ID to identify row where data will be updated
        //the object ID that will be replace with new data but the same ID
        let objectId = event.target.parentElement.parentElement.getAttribute('id');

        // select row based on ID *** because ID start with number 
        //I must target him with whole atribute `[id='${objectId}']`
        let selectRow = document.querySelector(`[id='${objectId}']`);

        // new values for new Employee
        let name = selectRow.firstElementChild.nextElementSibling.textContent;
        let email = selectRow.firstElementChild.nextElementSibling.nextElementSibling.textContent;
        let phoneNumber = selectRow.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        let dateOfBirth = selectRow.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        let salary = selectRow.lastElementChild.previousElementSibling.textContent;

        // create new instance of Employee
        let updateObject = new Employee(objectId, name, email, phoneNumber, dateOfBirth, salary);

        //call update method to replace old with new object on the same index
        empoyeesData.update(updateObject);
    }
}
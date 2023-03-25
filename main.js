import { Employee } from "./Employee.js";
import { Dao } from "./Dao.js"
import { employeesTable } from "./employeesTable.js";
import { deleteRow } from "./deleteRow.js"
import { updateRow } from "./updateRow.js"

// declare const for Employee entry
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const dateOfBirth = document.querySelector('#dateOfBirth');
const salary = document.querySelector('#salary');
const btnEmployee = document.querySelector('.btnEmployee');
const tableOfEmployee = document.querySelector('#tableOfEmployee');


// button for sort employee by name -- test button
const sortByNameEmployeeBtn = document.querySelector('.sortByNameEmployee-btn');

// // create instance of class Dao - for employees menagment
export const empoyeesData = new Dao();

// create ID 
function createId() {
    return Math.floor(Math.random() * new Date()).toString(10);
}

btnEmployee.addEventListener('click', () => {
    // create regular expression to validate e-mail simple pattern
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regex.test(email.value)) {
        alert('Please enter a valid e-mail.')
        return;
    }
    const employee = new Employee(`${createId()}`, `${name.value}`, `${email.value}`, `${phoneNumber.value}`, `${dateOfBirth.value}`, `${salary.value}`);

    // add employee to array - employeesData
    empoyeesData.add(employee);

    // create table with content of array - employeesData
    employeesTable(empoyeesData);

    // function to clear the input fields
    removeInputValue();
})

// // call function to delete row from table
tableOfEmployee.addEventListener('click', deleteRow);

// // call function to update objcet based on the changed values from table row
tableOfEmployee.addEventListener('click', updateRow);

// proba sort metode
sortByNameEmployeeBtn.addEventListener('click', () => {
    empoyeesData.sortByName();
    employeesTable(empoyeesData);
    console.log(empoyeesData.read)
})

// function to clear the input fields
function removeInputValue() {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phoneNumber').value = '';
    document.querySelector('#dateOfBirth').value = '';
    document.querySelector('#salary').value = '';
}
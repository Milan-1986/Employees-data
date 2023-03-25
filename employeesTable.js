// select employee table body 
const tbody = document.querySelector('.employeeTbody');

// function to draw the table with employees data
export function employeesTable(empoyeesData) {
    tbody.innerHTML = '';
    empoyeesData.read.forEach(object => {
        const tr = document.createElement('tr');

        // set attribute scope with value row for accessibility 
        tr.setAttribute('scope', 'row');

        //set attribute id for identification 
        tr.setAttribute('id', `${object.employeeId}`);
        const td = tr.insertCell();
        td.textContent = object.employeeId;
        const td1 = tr.insertCell(1);
        td1.textContent = object.employeeName;
        const td2 = tr.insertCell(2);
        td2.textContent = object.employeeEmail;
        const td3 = tr.insertCell(3);
        td3.textContent = object.employeePhoneNumber;
        const td4 = tr.insertCell(4);
        td4.textContent = object.employeeDateOfBirth;
        const td5 = tr.insertCell(5);
        td5.textContent = object.employeeSalary;
        const td6 = tr.insertCell(6);
        td6.innerHTML = `<button class="deleteData" contenteditable="false">Delete data</button><br><button class="updateData" contenteditable="false">Update data</button>`;
        tbody.appendChild(tr);
    })
}

// event to allow edit data in table row
tbody.addEventListener('dblclick', (event) => {
    // check if ctrl key is pressed with duble click event
    if (event.target.parentElement.getAttribute('contenteditable')) {
        return;
    };
    if (!event.ctrlKey) {
        alert('Must hold ctrl key and duble click on table cell if You want to update data.')
    }
    if (event.ctrlKey) {
        alert(`Data in this cell will be unlocked 30 seconds. 
When you're done updating, click the update data button.`);
        event.target.setAttribute('contenteditable', 'true');
        // lock the cell after 30 seconds
        setTimeout(() => {
            event.target.setAttribute('contenteditable', 'false')
        }, 30000)
    }
});
//class to create instance of employee

export class Employee {
    #id;
    #name;
    #email;
    #phoneNumber;
    #dateOfBirth;
    #salary;
    constructor(id, name, email, phoneNumber, dateOfBirth, salary) {
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#phoneNumber = phoneNumber;
        this.#dateOfBirth = dateOfBirth;
        this.#salary = salary;
    }

    get employeeId() {
        return this.#id;
    }
    get employeeName() {
        return this.#name;
    }
    get employeeEmail() {
        return this.#email;
    }
    get employeePhoneNumber() {
        return this.#phoneNumber;
    }
    get employeeDateOfBirth() {
        return this.#dateOfBirth;
    }
    get employeeSalary() {
        return this.#salary;
    }
}
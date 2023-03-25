// Data access object

export class Dao {
    #arrayOfData;
    constructor() {
        this.#arrayOfData = [];
    }
    // method to add new employee to this.#arrayOfEmployees
    add(object) {
        this.#arrayOfData.push(object);
    }
    // return array with object elements
    get read() {
        return this.#arrayOfData;
    }
    // method to delete object from this.#arrayOfEmployees
    delete(object) {
        // identify id of object
        let objectId = object.employeeId;

        //find object index in arrayOfEmployees by id
        let index = this.#arrayOfData.findIndex(object => object.employeeId === objectId);

        //remove object from arrayOfEmployees
        this.#arrayOfData.splice(index, 1);
    }
    // method to update this.#arrayOfEmployees 
    update(object) {
        // identify id of object
        let objectId = object.employeeId;

        //find object index in arrayOfEmployees by id
        let index = this.#arrayOfData.findIndex(object => object.employeeId === objectId);

        //replace old with new object passed as argument on the same index
        this.#arrayOfData.splice(index, 1, object)
    }
    // method to sort array by name
    sortByName() {
        this.#arrayOfData.sort((a, b) => {
            let nameA = a.employeeName.toLowerCase();
            let nameB = b.employeeName.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
    }
}
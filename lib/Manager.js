const Employee = require('./Employee');

//Create a extended class of Employee called Manager
class Manager extends Employee{

    //give the Manager an additional attrribute of officeNumber
    constructor(name='',id='',email='', officeNumber = ''){
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    //Override getRole() OF employee to return manager
    getRole(){
        return 'Manager';
    }

    //return the additional attribute of office number
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;
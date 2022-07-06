class Employee{
    //create the basic definition of an employee
    constructor(name='',id='',email=''){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //return the name of the employee
    getName(){
        return this.name;
    }

    //return the Id of the employee 
    getId(){
        return this.id;
    }

    //return the email of the employee
    getEmail(){
        return this.email;
    }

    //return the role of the employee
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;
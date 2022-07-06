const Employee = require('./Employee.js');

//Create a extended class of Employee called Engineer
class Intern extends Employee{

    //give the Engineer an additional attrribute of github
    constructor(name='', id='', email='', school = ''){
        super(name,id,email);

        this.school = school;
    }

    //Override getRole() OF employee to return Intern
    getRole(){
        return 'Intern';
    }

    //return the additional attribute of school
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
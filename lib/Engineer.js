const Employee = require('./Employee.js');

//Create a extended class of Employee called Engineer
class Engineer extends Employee{

    //give the Engineer an additional attrribute of github
    constructor(name='', id='', email='', github = ''){
        super(name,id,email);

        this.github = github;
    }

    //Override getRole() OF employee to return Engineer
    getRole(){
        return 'Engineer';
    }

    //return the additional attribute of github
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;
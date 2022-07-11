const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
const {writeFile, copyFile} = require('./utils/generate-page.js');

//questions to input a manager
const managerQuestions = [
    {
        type:'text',
        name: 'name',
        message:"Please enter your manager's name: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter a name!");
                return false;
            }
        }
    },
    {
        type:'text',
        name: 'id',
        message:"Please enter your manager's employee id: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter an id!");
                return false;
            }
        }
    },
    {
        type:'text',
        name: 'email',
        message:"Please enter your manager's email: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter an email!");
                return false;
            }
        }
    },
    {
        type:'text',
        name: 'officeNumber',
        message:"Please enter your manager's office number: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter an office number!");
                return false;
            }
        }
    }
];

//questions to input an engineer
const engineerQuestions = [
    {
        type:'text',
        name: 'name',
        message:"Please enter your engineer's name: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter a name!");
                return false;
            }
        }
    },
    {
        type:'text',
        name: 'id',
        message:"Please enter your engineer's employee id: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter an id!");
                return false;
            }
        }
    },
    {
        type:'text',
        name: 'email',
        message:"Please enter your engineer's email: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter an email!");
                return false;
            }
        }
    },
    {
        type:'text',
        name: 'github',
        message:"Please enter your engineer's github link: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter a github link!");
                return false;
            }
        }
    }
];

//questions to input an intern
const internQuestions = [
    {
        type:'text',
        name: 'name',
        message:"Please enter your intern's name: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter a name!");
                return false;
            }
        }
    },
    {
        type:'text',
        name: 'id',
        message:"Please enter your intern's employee id: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter an id!");
                return false;
            }
        }
    },
    {
        type:'text',
        name: 'email',
        message:"Please enter your intern's email: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter an email!");
                return false;
            }
        }
    },
    {
        type:'text',
        name: 'school',
        message:"Please enter your intern's school: ",
        validate: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log("Please enter a school!");
                return false;
            }
        }
    }
];

//ask the user for the manager
function enterManager(){
    return inquirer.prompt(managerQuestions);
}

//ask the user for employees
function enterEmployees(employees){
    //prompt the user for at least one additional employee other than the manager
    return inquirer.prompt({
            type: 'list',
            message: 'What type of employee would you like to eneter?',
            name: 'type',
            choices: ['Engineer', 'Intern']
        })

    //user is prompted with whatever employee type they selected
    .then(({type}) => {
        if(type === 'Engineer'){
            return inquirer.prompt(engineerQuestions);
        }else if(type === 'Intern'){
            return inquirer.prompt(internQuestions);
        }
    })

    //ask the user if they would like to keep entering employees
    .then(employee => {
        if(employee.github){
            const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);
            employees.push(engineer);
        }else{
            const intern = new Intern(employee.name, employee.id, employee.email, employee.school);
            employees.push(intern);
        }
        return inquirer.prompt({
            type: 'confirm',
            message: 'Would you like to enter another employee?',
            name: 'choice',
            default: false
        })
    })

    .then(({choice}) => {
        if(choice === true){
            return enterEmployees(employees);
        }else{
            return employees;
        }
    })
}

//program execution when node index.js is invoked via terminal
enterManager().then(managerInfo => {
    let manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
    let employees = [manager];
    return employees;
})
    .then(employees => {
        return enterEmployees(employees);
    })
    .then(employees => {
         return generatePage(employees);
     }).then(pageData => {
        return writeFile(pageData);
    }).then(writeFileResponse => {
         console.log(writeFileResponse.message);
         return copyFile();
    }).then(copyFileResponse => {
         console.log(copyFileResponse.message);
    }).catch(err => {
         console.log(err);
    })

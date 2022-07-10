const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const generatePage = require('./src/page-template.js');
const {writeFile, copyFile} = require('./utils/generate-page.js');

//questions to input a manager
const managerQuestions = [
    {
        type:'text',
        name: 'name',
        message:"Please enter your manager's name: "
    },
    {
        type:'text',
        name: 'id',
        message:"Please enter your manager's employee id: "
    },
    {
        type:'text',
        name: 'email',
        message:"Please enter your manager's email: "
    },
    {
        type:'text',
        name: 'officeNumber',
        message:"Please enter your manager's office number: "
    }
];

//questions to input an engineer
const engineerQuestions = [
    {
        type:'text',
        name: 'engineerName',
        message:"Please enter your engineer's name: "
    },
    {
        type:'text',
        name: 'engineerID',
        message:"Please enter your engineer's employee id: "
    },
    {
        type:'text',
        name: 'engineerEmail',
        message:"Please enter your engineer's email: "
    },
    {
        type:'text',
        name: 'engineerGithub',
        message:"Please enter your engineer's github link: "
    }
];

//questions to input an intern
const internQuestions = [
    {
        type:'text',
        name: 'internName',
        message:"Please enter your intern's name: "
    },
    {
        type:'text',
        name: 'internId',
        message:"Please enter your intern's employee id: "
    },
    {
        type:'text',
        name: 'internEmail',
        message:"Please enter your intern's email: "
    },
    {
        type:'text',
        name: 'internSchool',
        message:"Please enter your intern's school: "
    }
];

//sample manager data
const managerSample = {
    name: 'Jacob',
    id: '99999',
    email: 'jacob.hannah164@gmail.com',
    officeNumber: '56789',
    employees: [
        {
            engineerName: 'Bob',
            engineerId: '89903',
            engineerEmail: 'sampleEmail@gmail.com',
            engineerGitHub: 'https://github.com/engineer'
        },
        {
            engineerName: 'Bill',
            engineerId: '546813',
            engineerEmail: 'sampleEmail@gmail.com',
            engineerGitHub: 'https://github.com/engineer2'
        },
        {
            internName: 'Joe',
            internId: '567890',
            internEmail: 'intern@gmail.com',
            internSchool: 'UNCC'
        },
        {
            internName: 'Carl',
            internId: '5613238',
            internEmail: 'inter2n@gmail.com',
            internSchool: 'UNCB'
        }
    ]
}

//ask the user for the manager
function enterManager(){
    return inquirer.prompt(managerQuestions);
}

//ask the user for employees
function addEmployees(manager){
    //if the manager has no employees then add an attribute to manager to add them
    if(!manager.employees){
        manager.employees =[];
    }

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
        manager.employees.push(employee);
        return inquirer.prompt({
            type: 'confirm',
            message: 'Would you like to enter another employee?',
            name: 'choice',
            default: false
        })
    })

    .then(({choice}) => {
        if(choice === true){
            return addEmployees(manager);
        }else{
            console.log(manager);
            return manager;
        }
    })
}


enterManager()
    .then(addEmployees)
    .then(managerData => {
        return generatePage(managerSample);
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

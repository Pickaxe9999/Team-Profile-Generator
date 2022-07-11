const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')

//generate the manager card
const generateManager = (manager) => {
    return `
        <div class="card">
            <h2>
            <span class="oi oi-clipboard"></span> ${manager.getName()}
                <p>${manager.getRole()}</p>
            </h2>
                    
            <div class="card-body">
                <div id="id">ID: ${manager.getId()}</div>
                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <div>Office Number: ${manager.getOfficeNumber()}</div>
            </div>
        </div>
    `
}

//generate employee cards
const generateEmployees = employee => {
    if(employee instanceof Engineer){
            return `
            <div class="card">
                <h2>
                    ${employee.getName()}
                    <p>${employee.getRole()}</p>
                </h2>
                        
                <div class="card-body">
                    <div id="id">ID: ${employee.getId()}</div>
                    <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                    <div>Github: <a href="${employee.getGithub()}">${employee.getGithub()}</a></div>
                </div>
            </div>
            `
    }else{
        return `
            <div class="card">
                <h2>
                    ${employee.getName()}
                    <p>${employee.getRole()}</p>
                </h2>
                        
                <div class="card-body">
                    <div id="id">ID: ${employee.getId()}</div>
                    <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                    <div>School: <a href="${employee.getSchool()}">${employee.getSchool()}</a></div>
                </div>
            </div>
            `
    }
}

//returns the html string literal for file data
module.exports = employees => {
    return`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header>
            My Team
        </header>

        <div class="card-container">
            ${generateManager(employees[0])}

            ${employees.slice(1).map(employee => generateEmployees(employee)).join('')}
        </div> 
    </body>
</html>
    `
}
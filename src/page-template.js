const generateManager = (name, id, email, officeNumber) => {
    return `
        <div class="card">
            <h2>
            <span class="oi oi-clipboard"></span> ${name}
                <p>Manager</p>
            </h2>
                    
            <div class="card-body">
                <div id="id">ID: ${id}</div>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <div>Office Number: ${officeNumber}</div>
            </div>
        </div>
    `
}

const generateEmployees = employeeData => {
    return`
    ${employeeData.filter(({engineerName}) => engineerName)
    .map(({engineerName, engineerId, engineerEmail, engineerGitHub}) => {
        return `
        <div class="card">
            <h2>
                ${engineerName}
                <p>Engineer</p>
            </h2>
                    
            <div class="card-body">
                <div id="id">ID: ${engineerId}</div>
                <p>Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a></p>
                <div>Github: <a href="${engineerGitHub}">${engineerGitHub}</a></div>
            </div>
        </div>
        `
    }).join('')}

    ${employeeData.filter(({internName}) => internName)
    .map(({internName, internId, internEmail, internSchool}) => {
        return `
        <div class="card">
            <h2>
                ${internName}
                <p>Intern</p>
            </h2>
                    
            <div class="card-body">
                <div id="id">ID: ${internId}</div>
                <p>Email: <a href="mailto:${internEmail}">${internEmail}</a></p>
                <div>School: ${internSchool}</div>
            </div>
        </div>
        `
    }).join('')}
    `
}

module.exports = managerData => {
    console.log(managerData);

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
            ${generateManager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)}

            ${generateEmployees(managerData.employees)}
        </div> 
    </body>
</html>
    `
}
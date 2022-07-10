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
            <div class="card">
                <h2>
                    Jacob
                    <p>Manager</p>
                </h2>
                
                <div class="card-body">
                    <div id="id">ID: 1</div>
                    <p>Email: <a id="email" href="mailto:jacob.hannah164@gmail.com">jacob.hannah164@gmail.com</a></p>
                    <div id="office-number">Office Number: 12</div>
                </div>
            </div> 
        </div> 
    </body>
</html>
    `
}
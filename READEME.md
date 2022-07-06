AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles


GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

create a command line interface for taking in user information to add to a webpage

Branch layout / test everything while creating employees
feature/file-structure
feature/class-employee
feature/class-manager
feature/class-engineer
feature/class-intern
feature/web-page-template-generation
feature/generate-html-all-employees

Class test information
Employee must have 
- name
- id
- email
- getName()
- getId()
- getEmail()
- getRole() //Returns Employee

Manager, Engineer, and Intern extend Employee

Manager must also have
- officeNumber
- getRole()//OverRide to return "Manager"

Engineer must also have
- github
- getGithub()
- getRole()//Override to return "Engineer"

Intern must also have
- school
- getSchool()
- getRole()//Overide to return "Intern"
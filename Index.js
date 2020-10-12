// const math = require('math');
const inquirer = require('inquirer');
// const { writeFile, copyFile } = require('./src/page-template');
const generatePage = require('./src/page-template')
const fs = require('fs');

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// console.log(Manager, Engineer, Intern)

//configurable vars:
//these two variables create strings of text that we are passing
const fName = "Index";

const pTitle = "Meet The Pom Tech Team";
// console.log(pTitle)

const teamArray = [];
// console.log(teamArray)

function is_Numeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const promptUser = teamData => {
    if (!teamData) {
        teamData = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id? (Required)',
            validate: idInput => {
                if (idInput) {
                    if (is_Numeric(idInput)) {
                        return true;
                    } else {
                        console.log('\nPlease enter a numeric value!');
                        return false;
                    }
                } else {
                    console.log('Please enter your ID!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your role? (Check one)',
            choices: ['Manager', 'Engineer', 'Intern']
        },

        // make function for each position
        // flow on the app will start with manager then go into add team
        // then either select intern or engineer and run one of those functions

        {
            type: 'input',
            name: 'officeNumber',
            message: 'what is your office number?',
            when: ({ role }) => {
                if (role == 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username: ',
            when: ({ role }) => {
                if (role == 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubprofile',
            message: 'Enter your Github profile URL (Required)',
            when: ({ role }) => {
                if (role == 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: githubprofileInput => {
                if (githubprofileInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub URL!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'what is the name of your school?',
            when: ({ role }) => {
                if (role == 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmp',
            message: 'Are you the team manager? If so, would you like to enter another employee?',
            default: false
        }

    ]).then(empData => {
        if (empData.role === "Manager") {
            const manager = new Manager(empData.name, empData.id, empData.email, empData.officeNumber)
            teamData.push(manager)
        } else if (empData.role === "Engineer") {
            const engineer = new Engineer(empData.name, empData.id, empData.email, empData.github, empData.githubprofile)
            teamData.push(engineer)
        } else if (empData.role === "Intern") {
            const intern = new Intern(empData.name, empData.id, empData.email, empData.school)
            teamData.push(intern)
        } if (empData.confirmAddEmp) {
            return promptUser(teamData)
        }
        return teamData;
    });
};
function writeToFile(fileName, data) {
    //data=mockData; // testing only
    fs.writeFile('dist/' + fileName + '.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('HTML created! Check out ' + fileName + ' in the Dist directory to see it!');
    }
    )
};
// function to initialize program
function init() {
    
    promptUser()
        .then(teamData => {
            console.log(teamData)
            return Promise.resolve([teamData, generatePage(teamData)]);
        })
        .then(teamData => { writeToFile(fName, teamData) })
        .catch(err => {
            // writeFile
            console.log(err);
        });
}
// function call to initialize program
init();






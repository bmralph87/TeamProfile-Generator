// const math = require('math');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./src/page-template');
const generatePage = require('./src/page-template');
const fs = require('fs');

//configurable vars:

const fName = "Index";
const pTitle = "My Team";

function is_Numeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const promptUser = teamData => {
    if (!teamData.members) {
        teamData.members = [];
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
            type: 'checkbox',
            name: 'role',
            message: 'What is your role? (Check one)',
            choices: ['Employee', 'Manager', 'Engineer', 'Intern']
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
            message: 'Would you like to enter another employee?',
            default: false
        }

    ]).then(empData => {
        teamData.members.push(empData);
        if (empData.confirmAddEmp) {
            return promptUser(teamData);
        } else {
            return teamData;
        }
    });
};

// {
//     type: 'input',
//     name: 'github',
//     message: 'What is your github username?',
// }, 
// {
//     type: 'input',
//     name: 'githubprofile',
//     message: 'What is your github profile?',
// }, 
//  {
//     type: 'input',
//     name: 'school',
//     message: 'What school did you graduate from?',
// },  


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
    promptUser({})
        .then(data => {
            return Promise.resolve([data, generatePage(pTitle, data)]);
        })
        .then(data => { writeToFile(fName, data[1]) })
        .catch(err => {writeFile
            console.log(err);
        });
}
//function call to initialize program
init();



// // ])
// //     .then(answers => {
// //         console.log(answers)
// //         let dataInput = generatePage(answers)
// //         console.log(dataInput)
// //         fs.writeFile('./src/page-template', dataInput, err => {
// //             if (err) {
// //               console.error(err)
// //               return
// //             }
// //             //file written successfully
// //           })
// //     })

//     .catch(err => {
//         console.log(err)
//     })

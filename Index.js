const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee id?',
    },
    {
        type: 'checkbox',
        name: 'role',
        message: 'What is your role? (Check one)',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    // if they choose Manager, ask them the following question:
    // message: 'What is your office number?',
      // if they choose Engineer, ask them the following questions:
    //   message: 'What is your github username?',
    //   message: 'What is your github profile?',
      // if they choose Intern, ask them the following question:
    //   message: 'What school did you graduate from?',
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
    },  
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    }, 
    {
        type: 'input',
        name: 'githubprofile',
        message: 'What is your github profile?',
    }, 
     {
        type: 'input',
        name: 'school',
        message: 'What school did you graduate from?',
    },  
])
    .then(answers => {
        console.log(answers)
        let dataInput = generatePage(answers)
        console.log(dataInput)
        fs.writeFile('./src/page-template', dataInput, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
          })
    })

    .catch(err => {
        console.log(err)
    })

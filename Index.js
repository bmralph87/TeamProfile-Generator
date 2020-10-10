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
        name: 'role',
        message: 'What is your role?',
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
        type: 'input',
        name: 'contact',
        message: 'What is your contact?',
    },  
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
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
        fs.writeFile('index.html', dataInput, err => {
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

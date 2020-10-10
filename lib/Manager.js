// function (name, id, email, contact) {
//     this.name = name:
//     this.id
//     this.emailthis.contact
//     if(this.name === 'myName') {
//         console.log(myName);
//     }
// }


const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, role, school, username) {
        super(name, id, email, role);

        this.school = school;
        this.username = username;
    }
};

module.exports = Manager;
// const Employee = require('./Employee')

class Employee extends Employee {
    constructor(name, role, email, id, contact, username, school) {
        super(name, role, email, id, contact, username, school);

        this.school = username;
        this.username = school;
    }
};



module.exports = Employee;
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, role, school, username) {
        super(name, id, email, role);

        this.school = school;
        this.username = username;
    }
};

module.exports = Intern;
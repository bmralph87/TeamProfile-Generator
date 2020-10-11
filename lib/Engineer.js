const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, email, id, github, githubprofile) {
        super(name, email, id);

        this.github = github;
        this.githubprofile = githubprofile;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

    getGithubprofile() {
        return this.githubprofile;
    }
}


module.exports = Engineer;
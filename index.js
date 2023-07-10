const inquirer = require('inquirer');
const questions = require('./assets/js/questions');
const queryActions = require('./assets/js/queryActions');

// gets user input for action
function userInput() {
    inquirer
    .prompt(questions.userAction)
    .then((action) => {
        if (action.action === 'View all departments') {
            queryActions.displayDepartments();
        } else if (action.action === 'View all roles') {
            queryActions.displayRoles();
        } else if (action.action === 'View all employees') {
            queryActions.displayEmployees();
        }
    })
    .catch((error) => {
    if (error.isTtyError) {
        console.log(error);
    } 
    });
}

// initialize app
function init() {
    userInput();
}

init();
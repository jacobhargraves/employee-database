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
        } else if (action.action === 'Add a department') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the name of the department?',
                    name: 'deptName',
                },
            ])
            .then((answer) => {
                queryActions.addDept(answer.deptName.trim());
            })
            .catch((error) => {
                if (error.isTtyError) {
                    console.log(error);
                } 
                });
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
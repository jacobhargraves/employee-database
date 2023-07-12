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
            .prompt(questions.addDeptQuestions)
            .then((answer) => {
                queryActions.addDept(answer.deptName.trim());
            })
            .catch((error) => {
                if (error.isTtyError) {
                    console.log(error);
                } 
                });
        } else if (action.action === 'Add a role') {
            inquirer
            .prompt(questions.addRoleQuestions)
            .then((answer) => {
                queryActions.addRole(answer);
            })
            .catch((error) => {
                if (error.isTtyError) {
                    console.log(error);
                } 
                });
        } else if (action.action === 'Add an employee') {
            inquirer
            .prompt(questions.addEmployeeQuestions)
            .then((answer) => {
                queryActions.addEmployee(answer);
            })
            .catch((error) => {
                if (error.isTtyError) {
                    console.log(error);
                } 
                });
        } else if (action.action === 'Update an employee role') {
            inquirer
            .prompt(questions.updateEmployeeQuestions)
            .then((answer) => {
                queryActions.updateEmployeeRole(answer);
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
const inquirer = require('inquirer');
const questions = require('./assets/js/questions');
const queryActions = require('./assets/js/queryActions');
const { getDeptNames } = require('./assets/js/queryActions');

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
        } else if (action.action === 'Add a role') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the name of the role?',
                    name: 'roleName',
                },
                {
                    type: 'input',
                    message: 'What is the salary of the role?',
                    name: 'roleSalary',
                },
                {
                    type: 'input',
                    message: 'What is the department id of the role?',
                    name: 'roleDeptID',
                },
            ])
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
            .prompt([
                {
                    type: 'input',
                    message: 'What is the first name of the employee?',
                    name: 'first_name',
                },
                {
                    type: 'input',
                    message: 'What is the last name of the employee?',
                    name: 'last_name',
                },
                {
                    type: 'input',
                    message: 'What is the role id of the employee?',
                    name: 'employeeRoleID',
                },
                {
                    type: 'input',
                    message: 'What is the id of the employee manager?',
                    name: 'employeeManager',
                },
            ])
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
            .prompt([
                {
                    type: 'input',
                    message: 'What is the id of the employee you wish to update?',
                    name: 'employeeID',
                },                
                {
                    type: 'input',
                    message: "Enter the id of the employee's new role",
                    name: 'newRoleID',
                },
            ])
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
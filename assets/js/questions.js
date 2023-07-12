// User input for start of application that allows them to select an action
const userAction = [ 
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department',
                'Add a role', 'Add an employee', 'Update an employee role']
    },
];

// 
const addDeptQuestions = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'deptName',
    },
];

//
const addRoleQuestions = [
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
];

const addEmployeeQuestions = [
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
];

const updateEmployeeQuestions = [
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
];

module.exports = {userAction, addDeptQuestions, addRoleQuestions, addEmployeeQuestions, updateEmployeeQuestions};
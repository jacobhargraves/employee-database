const inquirer = require('inquirer');
const mysql = require('mysql2');
const questions = require('./assets/js/questions')

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

// gets user input for action
function userInput() {
    inquirer
    .prompt(questions.userAction)
    .then((action) => {
        console.log(action);
        displayData(action);
    })
    .catch((error) => {
    if (error.isTtyError) {
        console.log(error);
    } 
    });
}

function displayData(action) {
    if (action.action === 'View all departments') {
        db.query(`SELECT * FROM department`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          });
    }
}

// initialize app
function init() {
    userInput();
}

init();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const questions = require('./assets/js/questions');
const Table = require('cli-table3');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'aL24D7fzQi$',
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
        db.query(`SELECT id, name FROM department`, (err, result) => {
            if (err) {
              console.log(err);
            }
            // Create table using cli-table3
            let table = new Table();

            // Add table headers
            let headers = Object.keys(result[0]);
            table.push(headers);
        
            // Add table rows
            result.forEach((row) => {
              let values = Object.values(row);
              table.push(values);
            });
        
            // Display the table
            console.log(table.toString());
          });
    } else if (action.action === 'View all roles') {
        db.query(`SELECT * FROM role`, (err, result) => {
            if (err) {
              console.log(err);
            }
            // Create table using cli-table3
            let table = new Table();

            // Add table headers
            let headers = Object.keys(result[0]);
            table.push(headers);
        
            // Add table rows
            result.forEach((row) => {
              let values = Object.values(row);
              table.push(values);
            });
        
            // Display the table
            console.log(table.toString());
          });
    } else if (action.action === 'View all employees') {
        db.query(`SELECT * FROM employee`, (err, result) => {
            if (err) {
              console.log(err);
            }
            // Create table using cli-table3
            let table = new Table();

            // Add table headers
            let headers = Object.keys(result[0]);
            table.push(headers);
        
            // Add table rows
            result.forEach((row) => {
              let values = Object.values(row);
              table.push(values);
            });
        
            // Display the table
            console.log(table.toString());
          });
    }
}

// initialize app
function init() {
    userInput();
}

init();
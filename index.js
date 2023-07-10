const inquirer = require('inquirer');
const mysql = require('mysql2');
const questions = require('./assets/js/questions')

// gets user input for action
function userInput() {
    inquirer
    .prompt(questions.userAction)
    .then((action) => {
        console.log(action);
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
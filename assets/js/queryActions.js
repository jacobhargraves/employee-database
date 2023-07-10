const mysql = require('mysql2');
const Table = require('cli-table3');

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

function displayDepartments() {
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
};

function displayRoles() {
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
};

function displayEmployees() {
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

module.exports = {displayDepartments, displayEmployees, displayRoles};
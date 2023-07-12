const mysql = require('mysql2');
const Table = require('cli-table3');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: process.env.MYSQL_PASSWORD,
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

function displayDepartments() {
    db.query(`SELECT id, name FROM department;`, (err, result) => {
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
    db.query(`SELECT role.id AS role_id, role.title, department.name AS department_name, role.salary
    FROM role
    JOIN department ON role.department_id = department.id;`, (err, result) => {
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
    db.query(`SELECT emp.id AS employee_id, emp.first_name, emp.last_name, 
    role.title, dept.name AS department_name, role.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
    FROM employee AS emp
    JOIN role ON emp.role_id = role.id
    JOIN department AS dept ON role.department_id = dept.id
    LEFT JOIN employee AS manager ON emp.manager_id = manager.id;`, (err, result) => {
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

function addDept(department) {
  let query = `INSERT INTO department (name) VALUES ('${department}');`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(`${department} added to database!`);
  })
}

function addRole(roleInput) {
  let query = `INSERT INTO role (title, salary, department_id) VALUES ('${roleInput.roleName}', ${roleInput.roleSalary}, ${roleInput.roleDeptID});`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(`${roleInput.roleName} added to database!`);
  })
}

function addEmployee(employeeInput) {
  let query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employeeInput.first_name}', '${employeeInput.last_name}', ${employeeInput.employeeRoleID}, ${employeeInput.employeeManager});`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(`${employeeInput.first_name} ${employeeInput.last_name} added to database!`);
  });
}

function updateEmployeeRole(newRoleInput) {
  let query = `UPDATE employee SET role_id = ${newRoleInput.newRoleID} WHERE id = '${newRoleInput.employeeID}';`
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(`Employee ${newRoleInput.employeeID}'s role was changed to role ID ${newRoleInput.newRoleID}`);
  });
}

module.exports = {displayDepartments, displayEmployees, displayRoles, addDept, addRole, addEmployee, updateEmployeeRole};
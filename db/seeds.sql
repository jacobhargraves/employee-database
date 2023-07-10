INSERT INTO department (name) 
VALUES 
    ('Engineering'), 
    ('Finance'), 
    ('Legal'), 
    ('Sales'), 
    ('Software');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Senior Engineer', 150000.00, 1),
    ('Junior Engineer', 90000.00, 1),
    ('Financial Advisor', 100000.00, 2),
    ('Accountant', 75000.00, 2),
    ('Attorney', 125000.00, 3),
    ('Senior Sales Representative', 160000.00, 4),
    ('Junior Sales Representative', 90000.00, 4),
    ('Senior Software Engineer', 175000.00, 5),
    ('Junior Software Engineer', 105000.00, 5),
    ('UX Designer', 105000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Jake', 'Hargraves', 8, NULL), 
    ('Tom', 'Allen', 3, NULL),
    ('Daniel', 'Mars', 6, NULL),
    ('Tyrone', 'Daniels', 5, NULL),
    ('Mike', 'Chan', 1, NULL),  
    ('Timothy', 'Smith', 10, 1), 
    ('Jon', 'Appleseed', 9, 1),  
    ('John', 'Doe', 2, 5), 
    ('Malia', 'Brown', 4, 2),  
    ('Ashley', 'Rodriguez', 7, 3);
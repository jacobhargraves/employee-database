INSERT INTO department (name) 
VALUES 
    ('Engineering'), 
    ('Finance'), 
    ('Legal'), 
    ('Sales'), 
    ('Software');

INSERT INTO role (title, salary, department_id)
VALUES 
    1('Senior Engineer', 150,000.00, 1),
    2('Junior Engineer', 90,000.00, 1),
    3('Financial Advisor', 100,000.00, 2),
    4('Accountant', 75,000.00, 2),
    5('Attorney', 125,000.00, 3),
    6('Sales Representative', 160,000.00, 4),
    7('Junior Sales Representative', 90,000.00, 4),
    8('Senior Software Engineer', 175,000.00, 5),
    9('Junior Software Engineer', 105,000.00, 5),
    10('UX Designer', 105,000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jake', 'Hargraves', 8, 8),
    ('Timothy', 'Smith', 10, 10),
    ('Jon', 'Appleseed', 9, 9),
    ('Daniel', 'Mars', 6, 6),
    ('Tyrone', 'Daniels', 5, 5),
    ('Mike', 'Chan', 1, 1),
    ('John', 'Doe', 2, 2),
    ('Malia', 'Brown', 4, 4),
    ('Tom', 'Allen', 3, 3),
    ('Ashley', 'Rodriguez', 7, 7);
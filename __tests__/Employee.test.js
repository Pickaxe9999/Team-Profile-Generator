const Employee = require('../lib/Employee.js');

//test if an employee can be created
test('create an employee object', () => {
    const employee = new Employee('Jacob',1,'sample@gmail.com');

    expect(employee.name).toBe('Jacob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('sample@gmail.com');
})

test('retrive the name of the employee', () => {
    const employee = new Employee('Jacob',1,'sample@gmail.com');

    expect(employee.getName()).toBe('Jacob');
})

test('retrive the name of the employee', () => {
    const employee = new Employee('Jacob',1,'sample@gmail.com');

    expect(employee.getName()).toBe('Jacob');
})

test('retrive the id of the employee', () => {
    const employee = new Employee('Jacob',1,'sample@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('retrive the email of the employee', () => {
    const employee = new Employee('Jacob',1,'sample@gmail.com');

    expect(employee.getEmail()).toBe('sample@gmail.com');
})

test('retrive the role of the employee', () => {
    const employee = new Employee('Jacob',1,'sample@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})
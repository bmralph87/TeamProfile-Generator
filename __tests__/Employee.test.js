const employee = require('../lib/Employee');

jest.mock('../lib/Employee');

console.log(new Employee());


test('creates an employee object', () => {
    const Employee = new Employee('employee name');
    console.log(new Employee);

    expect(employee.name).toBe('name');
    expect(employee.role).toBe('role');
    expect(employee.email).toBe('email');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.contact).toEqual(expect.any(Number));
    expect(employee.username).toBe('username');
    expect(employee.school).toBe('school');
}
    // expect(intern.extension).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
);
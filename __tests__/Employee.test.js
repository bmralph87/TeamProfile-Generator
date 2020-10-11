const Employee = require('../lib/Employee');

// console.log(new Employee());


test.only('creates an employee object', () => {
    const MyEmployee = new Employee('employee name', 'employee email', 'employee id');
    // console.log(MyEmployee);

    expect(MyEmployee.getName()).toBe('employee name');
    expect(MyEmployee.getRole()).toBe('Employee');
    expect(MyEmployee.getEmail()).toBe('employee email');
    expect(MyEmployee.getId()).toEqual('employee id');
}
    // expect(intern.extension).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
);
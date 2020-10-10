const Intern = require('../lib/Intern');

jest.mock('../lib/Intern');

console.log(new Intern());


test('confirms intern info is correct', () => {
    // const Manager = new Employee('');

    expect(intern.name).toBe('name');
    expect(intern.role).toBe('role');
    expect(intern.email).toBe('email');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.contact).toEqual(expect.any(Number));
    expect(intern.username).toBe('username');
    expect(intern.school).toBe('school');
}
    // expect(manager.extension).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
);

const Manager = require('../lib/Manager');

jest.mock('../lib/Manager');

console.log(new Manager());




test('confirms manager info is correct', () => {
    // const Manager = new Employee('');

    expect(manager.name).toBe('name');
    expect(manager.role).toBe('role');
    expect(manager.email).toBe('email');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.contact).toEqual(expect.any(Number));
    expect(manager.username).toBe('username');
    expect(manager.school).toBe('school');
}
    // expect(manager.extension).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
);






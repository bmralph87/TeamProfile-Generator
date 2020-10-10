const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer');

console.log(new Engineer());



test('confirms engineer info is correct', () => {
    const Engineer = new Employee('');

    expect(engineer.name).toBe('name');
    expect(engineer.role).toBe('role');
    expect(engineer.email).toBe('email');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.contact).toEqual(expect.any(Number));
    expect(engineer.username).toBe('username');
    expect(engineer.school).toBe('school');
}
    // expect(engineer.extension).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
);


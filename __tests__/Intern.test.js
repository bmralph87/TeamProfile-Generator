const Intern = require('../lib/Intern');



test('confirms intern info is correct', () => {
    const MyIntern = new Intern('name', 'email', 'id', 'school');

    expect(MyIntern.getName()).toBe('name');
    expect(MyIntern.getRole()).toBe('Intern');
    expect(MyIntern.getEmail()).toBe('email');
    expect(MyIntern.getId()).toEqual('id');
    expect(MyIntern.getSchool()).toBe('school');
}
    // expect(manager.extension).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
);

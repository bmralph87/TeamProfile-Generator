const Manager = require('../lib/Manager');



test('confirms manager info is correct', () => {
    const MyManager = new Manager('name', 'email', 'id', 'officeNumber');

    expect(MyManager.getName()).toBe('name');
    expect(MyManager.getRole()).toBe('Manager');
    expect(MyManager.getEmail()).toBe('email');
    expect(MyManager.getId()).toEqual('id');
    expect(MyManager.getOfficeNumber()).toEqual('officeNumber');
}
    // expect(manager.extension).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
);






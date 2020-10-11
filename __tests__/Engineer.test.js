const Engineer = require('../lib/Engineer');



test('confirms engineer info is correct', () => {
    const MyEngineer = new Engineer('name', 'email', 'id', 'github','githubprofile');

    expect(MyEngineer.getName()).toBe('name');
    expect(MyEngineer.getRole()).toBe('Engineer');
    expect(MyEngineer.getEmail()).toBe('email');
    expect(MyEngineer.getId()).toEqual('id');
    expect(MyEngineer.getGithub()).toBe('github');
    expect(MyEngineer.getGithubprofile()).toEqual('githubprofile');
}
    // expect(engineer.extension).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
);


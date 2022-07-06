const Engineer = require('../lib/Engineer.js');

test('create an Engineer object', () => {
    const engineer = new Engineer('Jacob',1,'sample@gmail.com', 'github.com/Pickaxe9999');

    expect(engineer.name).toBe('Jacob');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('sample@gmail.com');
    expect(engineer.github).toBe('github.com/Pickaxe9999');
})

test('retrive the name of Engineer', ()=> {
    const engineer = new Engineer('Jacob',1,'sample@gmail.com', 'github.com/Pickaxe9999');

    expect(engineer.getName()).toBe('Jacob');
})

test('retrive the id of Engineer', ()=> {
    const engineer = new Engineer('Jacob',1,'sample@gmail.com', 'github.com/Pickaxe9999');

    expect(engineer.getId()).toEqual(expect.any(Number));
})

test('retrive the email of Engineer', ()=> {
    const engineer = new Engineer('Jacob',1,'sample@gmail.com', 'github.com/Pickaxe9999');

    expect(engineer.getEmail()).toBe('sample@gmail.com');
})

test('retrive the github of Engineer', ()=> {
    const engineer = new Engineer('Jacob',1,'sample@gmail.com', 'github.com/Pickaxe9999');

    expect(engineer.getGithub()).toBe('github.com/Pickaxe9999');
})

test('retrive the role of Engineer', ()=> {
    const engineer = new Engineer('Jacob',1,'sample@gmail.com', 'github.com/Pickaxe9999');

    expect(engineer.getRole()).toBe('Engineer');
})
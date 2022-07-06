const Manager = require('../lib/Manager.js');

test('create a manger object', () => {
    const manager = new Manager('Jacob',1,'sample@gmail.com',600);

    expect(manager.name).toBe('Jacob');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('sample@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('retrive the name of Manager', ()=> {
    const manager = new Manager('Jacob',1,'sample@gmail.com',600);

    expect(manager.getName()).toBe('Jacob');
})

test('retrive the id of Manager', ()=> {
    const manager = new Manager('Jacob',1,'sample@gmail.com',600);

    expect(manager.getId()).toEqual(expect.any(Number));
})

test('retrive the email of Manager', ()=> {
    const manager = new Manager('Jacob',1,'sample@gmail.com',600);

    expect(manager.getEmail()).toBe('sample@gmail.com');
})

test('retrive the role of Manager', ()=> {
    const manager = new Manager('Jacob',1,'sample@gmail.com',600);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})
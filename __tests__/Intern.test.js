const Intern = require('../lib/Intern.js');

test('create an Intern object', () => {
    const intern = new Intern('Jacob',1,'sample@gmail.com', 'UNCC');

    expect(intern.name).toBe('Jacob');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('sample@gmail.com');
    expect(intern.school).toBe('UNCC');
})

test('retrive the name of Intern', ()=> {
    const intern = new Intern('Jacob',1,'sample@gmail.com', 'UNCC');

    expect(intern.getName()).toBe('Jacob');
})

test('retrive the id of Intern', ()=> {
    const intern = new Intern('Jacob',1,'sample@gmail.com', 'UNCC');

    expect(intern.getId()).toEqual(expect.any(Number));
})

test('retrive the email of Intern', ()=> {
    const intern = new Intern('Jacob',1,'sample@gmail.com', 'UNCC');

    expect(intern.getEmail()).toBe('sample@gmail.com');
})

test('retrive the school of Intern', ()=> {
    const intern = new Intern('Jacob',1,'sample@gmail.com', 'UNCC');

    expect(intern.getSchool()).toBe('UNCC');
})

test('retrive the role of Intern', ()=> {
    const intern = new Intern('Jacob',1,'sample@gmail.com', 'UNCC');

    expect(intern.getRole()).toBe('Intern');
})
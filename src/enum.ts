enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR = 'You can assign values here'
}

const person = {
  name: 'Isaac',
  age: 24,
  hobbies: ['bass guitar', 'meditation'],
  role: Role.ADMIN
};

if (person.role === Role.AUTHOR) console.log('is author'); // wont be logged
if (person.role === Role.ADMIN) console.log('is author'); // will be logged

console.log(Role.AUTHOR);

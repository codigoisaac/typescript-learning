const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Isaac',
  age: 24,
  hobbies: ['bass guitar', 'meditation'],
  role: [2, 'Chief Technology Officer']
};

person.role.push('Visionaire'); //! pushed type will not be catched
// person.role[1] = 10; // assignment type will be catched

let colors: string[] = ['blue', 'green', 'red'];

console.log(person);

var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role["AUTHOR"] = "You can assign values here";
})(Role || (Role = {}));
var person = {
    name: 'Isaac',
    age: 24,
    hobbies: ['bass guitar', 'meditation'],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR)
    console.log('is author'); // wont be logged
if (person.role === Role.ADMIN)
    console.log('is author'); // will be logged
console.log(Role.AUTHOR);

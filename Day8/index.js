'strict'
var  a   = 5;
console.log(a)

// Access properties simply by dot notation
let user = {};
// user.name = 'Foo';
// console.log(user.name);

// Getters and setters like these are no longer supported
// This code will no longer run
// let user = new User();
user.setName('Foo');
console.log(user.getName());
// const add = require('./utils.js');
// console.log(add(5,3));
//const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');
console.log(notes());

// console.log(validator.isEmail('jjgalpergmail.com'));
// console.log(validator.isURL('https:/mead.io'));

console.log(chalk.bold.green.inverse('Success!'));
console.log(chalk.bold.red.inverse('Danger!'));
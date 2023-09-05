const readline = require('readline-sync');

console.log("Wekcome to the calculator!");

console.log("Please enter the operator:");
const operator = readline.prompt(); 

console.log('Please enter some input:');
const response1 = Number(readline.prompt());
const response2 = Number(readline.prompt());

if (operator == '+') {
    console.log(response1 + response2);
} else if (operator == '-') {
    console.log(response1 - response2);
} else if (operator == '*') {
    console.log(response1 * response2);
} else if (operator == '/') {
    console.log(response1 / response2);
} else [
    console.log("Invalid operator")
];
console.log(response1 * response2);







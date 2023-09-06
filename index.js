const readline = require('readline-sync');

function printWelcomeMessage () {
    console.log("Welcome to the calculator!");
    console.log("==========================");
};

printWelcomeMessage();

console.log("Please enter the operator: ");
const operator = readline.prompt(); 

console.log(`How many numbers do you want to ${operator} together: `);
const numbersrequired = Number(readline.prompt());


let response;
const arr = [];
for (let i = 1; i < numbersrequired + 1; i++) {
    console.log(`Please enter number ${i}: `);
    response = Number(readline.prompt());
    arr.push(response);
};

let answer = arr[0];
for (let j = 0; j < arr.length - 1; j++) {
    if (operator == '+') {
        answer = answer + arr[j + 1];
    } else if (operator == '-') {
        answer = answer + arr[j + 1];
    } else if (operator == '*') {
        answer = answer + arr[j + 1];
    } else if (operator == '/') {
        answer = answer + arr[j + 1];
    } else {
        console.log("Invalid operator");
        answer = 'Error';
        break;
    };
};

console.log(`The answer is ${answer}!`);
const readline = require('readline-sync');

console.log("Welcome to the calculator!");
console.log("==========================");

console.log("Please enter the operator: ");
const operator = readline.prompt(); 

console.log(`How many numbers do you want to ${operator} together: `);
const numbersrequired = Number(readline.prompt());

/*
we want to be able to calculate any given amount of numbers
ask user how many numbers they want to add / multiply etc together
it will use the same operator each time

if they say 4 there should be 4 prompts, each saying enter number 1, then another prompt saying enter number 2 etc
use a for loop that will loop the prompt the required amount of times so if they want 4 to calculate 4 numbers loop 4 times
and put the value in an array at the end of the loop

we then need another for loop to go through and add them up
keep track of 2 values, one for the value lets say x that's being added to / multiplied for example after each loop and another for the index you are on that increments after each loop, 

then output x in the answer is area at the bottom, remove response 1 response 2
*/

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

console.log("The answer is " + answer);







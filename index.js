const readline = require('readline-sync');

function printWelcomeMessage () {
    console.log("Welcome to the calculator!");
    console.log("==========================");
};

function getInputWithPrompt (prompt) {
    console.log(prompt);
    return readline.prompt();
};

function getOperator () {
    return getInputWithPrompt("\nPlease enter the operator: ") 
};

function getNumbersArray(operator) {
    const numbersRequired = Number(getInputWithPrompt(`How many numbers do you want to ${operator} together: `)); 
    
    const arr = [];
    for (let i = 1; i < numbersRequired + 1; i++) {
    arr.push(Number(getInputWithPrompt(`Please enter number ${i}: `)));
};
return arr;
};

function calculateAnswer(operator, array) {
    let answer = array[0];
    for (let j = 0; j < array.length - 1; j++) {
    if (operator == '+') {
        answer = answer + array[j + 1];
    } else if (operator == '-') {
        answer = answer + array[j + 1];
    } else if (operator == '*') {
        answer = answer + array[j + 1];
    } else if (operator == '/') {
        answer = answer + array[j + 1];
    } else {
        console.log("Invalid operator");
        answer = 'Error';
        break;
    };
};
return answer;
}

function performOneCalculation () {
    const chosenOperator = getOperator();
    let numbersArray = getNumbersArray(chosenOperator); // check if it works with let or const, unsure if function call assignment and function return will work on const
    const finalAnswer = calculateAnswer(chosenOperator, numbersArray)
    console.log(`The answer is ${finalAnswer}!`);
};

printWelcomeMessage();
while (true) {
    performOneCalculation();
};

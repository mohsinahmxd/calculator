const readline = require('readline-sync');

function printWelcomeMessage () {
    console.log("Welcome to the calculator!");
    console.log("==========================");
};

function getInputWithPrompt (prompt) {
    console.log(prompt);
    return readline.prompt();
};

function getCalculationMode () {
    return getInputWithPrompt(`
    Which calculator mode do you want?
    Enter 1 for Arithmetic
    Enter 2 for Vowel Counting`
    )
}

function getOperator () {
    return getInputWithPrompt("\nPlease enter the operator: ") 
};

function getString () {
    return getInputWithPrompt("\nPlease enter the string: ").toUpperCase();
    
}

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

function calculateVowels (string) {
  // use an object to hold the answer while doing the vowel counting calculation
  // add support for counting the number of times each vowel appears in a given string

  const vowels = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0,
  }

  for (letter in string) {
    if (letter === 'A') {
        vowels.A = vowels.A + 1
    } else if (letter === 'E') {
        vowels.E = vowels.E + 1
    } else if (letter === 'I') {
        vowels.I = vowels.I + 1
    } else if (letter === 'O') {
        vowels.O = vowels.O + 1
    } else if (letter === 'U') {
        vowels.U = vowels.U + 1
    }
  }

  // return the object
  return vowels;
};

function performOneArithmeticCalculation () {
    const chosenOperator = getOperator();
    const numbersArray = getNumbersArray(chosenOperator);
    const finalAnswer = calculateAnswer(chosenOperator, numbersArray)
    console.log(`The answer is ${finalAnswer}!`);
};

function performOneVowelCountingCalculation () {
    const givenString = getString();

    // call the functuon and assign the object to a variable
    const calculatedVowelsObject = calculateVowels(givenString);
    
    // output the "the vowel counts are" text and the object as shown in the pdf
    console.log(`The vowel counts are:
    ${calculatedVowelsObject}
    `);
};

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
    performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
    performOneVowelCountingCalculation();
    }
    
};






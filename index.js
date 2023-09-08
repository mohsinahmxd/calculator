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
    return getInputWithPrompt(`Which calculator mode do you want?
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

  const vowels = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0,
  }

  for (let letterIndex in string) {
    console.log(string[letterIndex]);
    
    if (string[letterIndex] === 'A') {
        vowels.A = vowels.A + 1; 
    } else if (string[letterIndex] === 'E') {
        vowels.E = vowels.E + 1;
    } else if (string[letterIndex] === 'I') {
        vowels.I = vowels.I + 1;
    } else if (string[letterIndex] === 'O') {
        vowels.O = vowels.O + 1;
    } else if (string[letterIndex] === 'U') {
        vowels.U = vowels.U + 1;
    } else {

    };
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
    
    // output the the vowel counts
    console.log("The vowel counts are");
    for (let property in calculatedVowelsObject) {
        console.log(property + " : " + calculatedVowelsObject[property]);
    }
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






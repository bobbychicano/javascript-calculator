'use strict'

let a = '';
let b = '';
let mathematics = '';

// addition, subtraction, multiplication, and division functions
const addition = function(a, b, ...numbers) {
  if (numbers.length == 0) {
    numbers[0] = 0;
  };

  let reducer = numbers.reduce((previous, current) => previous + current);
  return a + b + reducer;
};

const subtraction = function(a, b, ...numbers) {
  if (numbers.length == 0) {
    numbers[0] = 0;
  };

  let reducer = numbers.reduce((previous, current) => previous - current);

  if (reducer < 0) {reducer *= -1};

  return a - b - reducer;
};

const multiplication = function(a, b, ...numbers) {
  if (numbers.length == 0) {
    numbers[0] = 1;
  };

  let reducer = numbers.reduce((previous, current) => previous * current);
  return a * b * reducer;
};

const division = function(a, b, ...numbers) {
  if (numbers.length == 0) {
    numbers[0] = 1;
  };

  let reducer = numbers.reduce((previous, current) => previous / current);
  return a / b / reducer;
};

// how do I include a condition that wont allow users to divide by 0?
// add this condition to the operator() function so that they can't even input 0 into my division() function.

// takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = function(a, mathematics, b) {
  switch (mathematics) {
    case '+':
    mathematics = addition;
    break;

    case '-':
    mathematics = subtraction;
    break;

    case '*':
    mathematics = multiplication;
    break;

    case '/':
    mathematics = division;
    break;

    default:
    console.log('Not a valid operator.');
  }

  return mathematics(a, b);
};


// Create the functions that populate the display when you click the number buttons… you should be storing
// the ‘display value’ in a variable somewhere for use in the next step.

const displayValue = document.querySelector('.output');

const allDigits = document.querySelectorAll('.digit');
// console.log(allDigits);

// the variable to store the numbers clicked on
let numberStorage = '';

for (let i = 0; i < allDigits.length; i++) {
  allDigits[i].addEventListener('click', function(e) {
    if (displayValue.textContent.length < 10) {
      displayValue.textContent = displayValue.textContent + e.target.textContent;
    }

    // stores a number each time a number button is clicked concatenating the numbers to store the most
    // recent number.
    numberStorage = +(displayValue.textContent);

    //i have to add a condition on the digits in case they are clicked when there is already a solution
    //on the screen
  })
};


//this motherfucker works, which could lead to a simplified version of the functionality I want
//buttonSeven.addEventListener('click', function(e) {
//  displayValue.textContent = e.target.textContent;
//});

// clear button functionality

const clearDisplay = document.querySelector('.AC');

clearDisplay.addEventListener('click', function() {
  displayValue.textContent = '';
  numberStorage = '';
  a = '';
  b = '';
});

// addition button functionality

const additionButton = document.querySelector('.plus');

additionButton.addEventListener('click', function() {

  //if the user clicks on the addition operator again (or another operator) after clicking on another
  //operand, then those two operands must be operated on and the display needs to be updated accordingly
  if (a) {
    b = numberStorage;
    console.log(b);
    mathematics = '+';
    displayValue.textContent = operate(a, '+', b);
    a = operate(a, '+', b);
  } else if (displayValue.textContent.length > 0) {
    a = numberStorage;
    console.log(a);
    displayValue.textContent = '';
  }

  mathematics = '+';
  console.log(mathematics);
});

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', function() {
  if (displayValue.textContent.length > 0) {
    b = numberStorage;
    console.log(b);
  }

  displayValue.textContent = operate(a, '+', b);
})

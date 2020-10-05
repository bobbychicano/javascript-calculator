'use strict'

let a = '';
let b = '';
let mathematics = '';

// addition, subtraction, multiplication, and division functions
const addition = function(a, b) {
  return a + b;
};

const subtraction = function(a, b) {
  return a - b;
};

const multiplication = function(a, b) {
  return a * b;
};

const division = function(a, b) {
  return a / b;
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
  }

  return mathematics(a, b);
};


const displayValue = document.querySelector('.output');

const allDigits = document.querySelectorAll('.digit');

// the variable to store the numbers clicked on

let numberStorage = '';

for (let i = 0; i < allDigits.length; i++) {
  allDigits[i].addEventListener('click', function() {
    if (displayValue.textContent.length < 10) {
      render(i);
    }
    numberInput();
  })
};

// Display render function

//You should have a render() function that draws the screen, based on the data you're storing in your
//variables

let render = function(i) {
  displayValue.textContent += allDigits[i].textContent;
};

// Number storage function
let numberInput = function() {
  numberStorage = +(displayValue.textContent);
};

// clear button functionality

const clearDisplay = document.querySelector('.clear');

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
    a = +(displayValue.textContent);
  } else if (!a && displayValue.textContent.length > 0) {
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

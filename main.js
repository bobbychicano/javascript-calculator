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

  console.log(mathematics(a, b));
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
    console.log(numberStorage);
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
});

//store the display value as a number when an operator is clicked.

/*
const additionButton = document.querySelector('.plus');

additionButton.addEventListener('click', function() {
  // addition();

  if (displayValue.textContent.length > 0) {
    let a = +(displayValue.textContent);
    console.log(a);
  }

  let mathematics = '+';
  console.log(mathematics);

  //clear out the display
  displayValue.textContent = '';
});

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', function() {
  if (displayValue.textContent.length > 0) {
    let b = +(displayValue.textContent);
    console.log(b);
    operate(a, '+', b);
  }

})
*/

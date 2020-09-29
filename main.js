
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

let displayValue = document.querySelector('.output');

/*
let buttonSeven = document.querySelector('.seven');
console.log(buttonSeven);

buttonSeven.addEventListener('click', function() {
  displayValue.textContent = '7';
});
*/

let allDigits = document.querySelectorAll('.digit');
console.log(allDigits);

for (let i = 0; i < allDigits.length; i++) {
  allDigits[i].addEventListener('click', function(e) {
    displayValue.textContent = e.target.textContent;
  })
};

//this motherfucker works, which could lead to a simplified version of the functionality I want
//buttonSeven.addEventListener('click', function(e) {
//  displayValue.textContent = e.target.textContent;
//});

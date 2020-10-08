
const displayValue = document.querySelector('.output');
const clearDisplay = document.querySelector('.clear');
const allDigits = document.querySelectorAll('.digit');
const plusSign = document.querySelector('.plus');
const equalsButton = document.querySelector('.equals');

let firstNumber = '';
let operator = '';
let secondNumber = '';

for (let i = 0; i < allDigits.length; i++) {
  allDigits[i].addEventListener('click', handleNumberInput)
};

clearDisplay.addEventListener('click', function() {
  displayValue.innerHTML = '';
	firstNumber = '';
  secondNumber = '';
  operator = '';
});

//addition button functionality
plusSign.addEventListener('click', function() {
  operator = '+';
  console.log(operator);
  displayValue.innerHTML = '';

  /*
  if (firstNumber && secondNumber) {
    let thirdNumber = operate(+firstNumber, operator, +secondNumber);
    console.log(thirdNumber);
    firstNumber = thirdNumber;
    secondNumber = '';
  }
  */
})

//equals button functionality
equalsButton.addEventListener('click', function() {
  displayValue.innerHTML = operate(+firstNumber, operator, +secondNumber);
})

//function that calls both the numberInput and the render function when button is clicked
function handleNumberInput(e) {
	const number = Number(e.target.value);
  console.log(number);
  addToActiveNumber(number);
  render(number);
};

//Number storage function
function addToActiveNumber(number) {
	if (firstNumber && operator) {
		secondNumber += number;
	} else {
		firstNumber += number;
	}
};

//Render function
function render(number) {
  displayValue.innerHTML += number;
}

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

// Operate function. Takes an operator and 2 numbers and then calls one of the above functions
const operate = function(a, operator, b) {
  switch (operator) {
    case '+':
			return addition(a, b);
			break;

    case '-':
			return subtraction(a, b);
			break;

    case '*':
			return multiplication(a, b);
			break;

    case '/':
			return division(a, b);
			break;
  }
};

/*
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
*/

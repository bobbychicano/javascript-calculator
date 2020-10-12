
const displayValue = document.querySelector('.output');
const clearDisplay = document.querySelector('.clear');
const allDigits = document.querySelectorAll('.digit');
const plusSign = document.querySelector('.plus');
const equalsButton = document.querySelector('.equals');

const operatorButtons = document.querySelectorAll('.sign');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let thirdNumber = '';

for (let i = 0; i < allDigits.length; i++) {
  allDigits[i].addEventListener('click', handleNumberInput)
};

//Clear functionality
clearDisplay.addEventListener('click', function() {
  displayValue.innerHTML = '';
	firstNumber = '';
  secondNumber = '';
  operator = '';
  thirdNumber = '';
});

//what do I want all of the operators to do?

/*
//addition button functionality
plusSign.addEventListener('click', function() {
  operator = '+';
  console.log(operator);

  if (firstNumber && secondNumber) {
    thirdNumber = operate(+firstNumber, operator, +secondNumber);
    render(thirdNumber);
    firstNumber = thirdNumber;
    secondNumber = '';
  }
})
*/

// testing out a function on all operator buttons
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function () {
    operator = operatorButtons[i].value;
    console.log(operator);

    if (firstNumber && secondNumber) {
      thirdNumber = operate(+firstNumber, operator, +secondNumber);
      render(thirdNumber);
      firstNumber = thirdNumber;
      secondNumber = '';
    }
  })
};


//


//equals button functionality
equalsButton.addEventListener('click', function() {
  displayValue.innerHTML = operate(+firstNumber, operator, +secondNumber);
})

//function that calls both the numberInput and the render function when button is clicked
function handleNumberInput(e) {
  const number = Number(e.target.value);
    console.log(number);

    if (firstNumber && operator && secondNumber.length < 9) {
      //displayValue.innerHTML = '';
      addToActiveNumber(number);
      render(secondNumber);
    } else if (firstNumber.length < 9) {
      addToActiveNumber(number);
      render(firstNumber);
    }
};

//Number storage function
function addToActiveNumber(number) {
	if (firstNumber && operator) {
		secondNumber += number;
	} else {
		firstNumber += number;
	}
};

function render(calculatorItems) {
  displayValue.innerHTML = calculatorItems;
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

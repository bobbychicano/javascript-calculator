
const displayValue = document.querySelector('.output');
const clearDisplay = document.querySelector('.clear');
const numberButtons = document.querySelectorAll('.digit');
const equalsButton = document.querySelector('.equals');
const operatorButtons = document.querySelectorAll('.sign');
const decimalButton = document.querySelector('.decimal');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let thirdNumber = '';

// Keyboard number event listeners

document.body.addEventListener('keyup', (e) => {
  if (e.key >= 0 && e.key <= 9) {

    let number = Number(e.key);
    console.log(number);

    if (firstNumber && operator && secondNumber.length < 9) {
      addToActiveNumber(number);
      render(secondNumber);
    } else if (firstNumber.length < 9) {
      addToActiveNumber(number);
      render(firstNumber);
    }
  };

  if (e.key == '+' || e.key == '/' || e.key == '-' || e.key == '*') {
    if (firstNumber && secondNumber) {
      thirdNumber = operate(+firstNumber, operator, +secondNumber);
      if (thirdNumber % 1 != 0) {
        thirdNumber = thirdNumber.toFixed(4);
      }
      render(thirdNumber);
      firstNumber = thirdNumber;
      secondNumber = '';
    }

    operator = e.key;
    console.log(operator);
  }

})

// Keyboard equals button listener

// Keyboard clear event listener

// Keyboard decimal event listener


// Number buttons functionality
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', handleNumberInput)
};

// Operator buttons functionality
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function () {
    if (firstNumber && secondNumber) {
      thirdNumber = operate(+firstNumber, operator, +secondNumber);
      if (thirdNumber % 1 != 0) {
        thirdNumber = thirdNumber.toFixed(4);
      }
      render(thirdNumber);
      firstNumber = thirdNumber;
      secondNumber = '';
    }

    operator = operatorButtons[i].value;
    console.log(operator);

  })
};

// Equals button functionality
equalsButton.addEventListener('click', function() {
let total = operate(+firstNumber, operator, +secondNumber);

  if(!secondNumber) {
    return
  }

  if (total % 1 != 0) {
   total = total.toFixed(4);
 }

  displayValue.innerHTML = total;
  firstNumber = total;
  secondNumber = '';
})

// Clear button functionality
clearDisplay.addEventListener('click', function() {
  displayValue.innerHTML = '';
	firstNumber = '';
  secondNumber = '';
  operator = '';
  thirdNumber = '';
});

// Decimal button functionality
decimalButton.addEventListener('click', function () {
  decimal = decimalButton.value;

  if (displayValue.innerHTML.includes('.')) {
    return;
  } else {
    addToActiveNumber(decimal);

    if (secondNumber) {
      render(secondNumber);
    } else {
      render(firstNumber);
    }
  }
})

// Function to handle number storage and number display
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

// Number storage function
function addToActiveNumber(number) {
	if (firstNumber && operator) {
		secondNumber += number;
	} else {
		firstNumber += number;
	}
};

// Render display function
function render(activeNumber) {
  displayValue.innerHTML = activeNumber;
}

// Addition, subtraction, multiplication, and division functions
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
      if (secondNumber == 0) {
        alert("You can't divide by zero my friend. Press C to clear.");
      } else {
        return division(a, b);
      }
			break;
  }
};

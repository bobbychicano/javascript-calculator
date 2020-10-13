
const displayValue = document.querySelector('.output');
const clearDisplay = document.querySelector('.clear');
const allDigits = document.querySelectorAll('.digit');
const equalsButton = document.querySelector('.equals');
const operatorButtons = document.querySelectorAll('.sign');
const decimalButton = document.querySelector('.decimal');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let thirdNumber = '';

// Number buttons functionality
for (let i = 0; i < allDigits.length; i++) {
  allDigits[i].addEventListener('click', handleNumberInput)
};

// Operator buttons functionality
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function () {
    operator = operatorButtons[i].value;
    console.log(operator);

    if (firstNumber && secondNumber) {
      thirdNumber = operate(+firstNumber, operator, +secondNumber);
      if (thirdNumber % 1 != 0) {
        thirdNumber = thirdNumber.toFixed(4);
      }
      render(thirdNumber);
      firstNumber = thirdNumber;
      secondNumber = '';
    }
  })
};

//equals button functionality
equalsButton.addEventListener('click', function() {

  if(!secondNumber) {
    return
  } else {
    let total = operate(+firstNumber, operator, +secondNumber);
    console.log(total);
  }


  if (total % 1 != 0) {
   total = total.toFixed(4);
 }

  displayValue.innerHTML = total;
})

//Clear functionality
clearDisplay.addEventListener('click', function() {
  displayValue.innerHTML = '';
	firstNumber = '';
  secondNumber = '';
  operator = '';
  thirdNumber = '';
});

//Decimal button functionality
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

function render(activeNumber) {
  displayValue.innerHTML = activeNumber;
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
      if (secondNumber == 0) {
        alert("You can't divide by zero my friend. Press C to clear.");
      } else {
        return division(a, b);
      }
			break;

    default:
      return;
  }

};

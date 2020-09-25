
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
const operate = function(a, b, mathematics) {
  return mathematics(a, b);
};

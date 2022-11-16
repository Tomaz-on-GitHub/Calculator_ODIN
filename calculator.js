//create global value to store display value
let displayValue = 0;


const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum_old = function(array1) {
	return array1.reduce((sum,item) =>{
         return sum +=item},0);
};

const sum = function(a,b) {
	return a+b;
};

const multiply_old = function(array) {
  return array.reduce((multi,item) =>{
    return multi *=item},1); 
};

const multiply = function(a,b) {
  return a*b;
};

const divide = function(a,b) {
  return a / b;
}
//console.log(multiply([]));

const power = function(a,b) {
	return Math.pow(a, b);
};

const inverse = function(num) {
  if (num === 0 ) {return 'Err'
  } else { return 1/num }
};

const factorial = function(num) {
	if (num === 0) { 
    return 1;
  } else {//for numbers from 1 to infinity!?
    let factorial = 1; 

    for (let i = num; i > 0; i--) {
      factorial *= i;
    } 
    return factorial
  }
};
function operate(operator, a,b,) {
  switch (operator) {
    case 'add':
      return add(a,b);
      break;
    case 'subtract':
      return subtract(a,b);
      break;
    case 'multiply':
      return multiply(a,b);
      break;
    case 'divide':
      return divide(a,b);
      break;
    case 'power':
      return power(a,b);
      break;
    case 'factorial':
      return factorial(a);
      break;
    case 'inverse':
      return inverse(a);
  }
}

/*
console.log(add(2,6));
console.log(subtract(12,8));
//console.log(sum(24,2));
console.log(multiply(24,2));
console.log(divide(10,2));
console.log(power(5,3));
console.log(factorial(4));
console.log(inverse(6));#
*/
console.log('function add:' + operate('add',2,4));
console.log('function subtract:' + operate('subtract',12,8));
console.log('function multiply:' + operate('multiply',24,2));
console.log('function divide:' + operate('divide',10,2));
console.log('function power:' + operate('power',5,3));
console.log('function factorial:' + operate('factorial',4));
console.log('function inverse:' + operate('inverse',6));
//console.log(factorial(10));
// Do not edit below this line
/*
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
*/
function writeNumber(num) {
  //console.log('you pressed: ' + element.id)
  //limit display to 10 numbers
  elDisplay = document.getElementById("display")
  if (elDisplay.textContent.length < 10) {
    if (displayValue == 0) {displayValue = num;
    } else {displayValue += num;
    }
  
  elDisplay.textContent = displayValue;
  }
}
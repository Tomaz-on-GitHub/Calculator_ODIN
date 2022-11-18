//create global value to store display value
let displayValue = undefined;
let displayValueFirst = undefined;
let OperationSign = '';


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

const sign = function(num) {
  return -num;
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
    case 'sign':
      return sign(a);
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
console.log('function subtract:' + operate('subtract',37,2));
console.log('function sign:' + operate('sign',5));
/*
console.log('function add:' + operate('add',2,4));
console.log('function subtract:' + operate('subtract',12,8));
console.log('function multiply:' + operate('multiply',24,2));
console.log('function divide:' + operate('divide',10,2));
console.log('function power:' + operate('power',5,3));
console.log('function factorial:' + operate('factorial',4));
console.log('function inverse:' + operate('inverse',6));
*/
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

  if (OperationSign !=='' && displayValueFirst === undefined) {
    //operation is selected, need to write the second number 
    displayValueFirst = displayValue;
    console.log('first value:' + displayValueFirst)
    displayValue = undefined;  //reset the display
 }
  
    if (displayValue == undefined) {
      displayValue =num;
    } else {
      if (elDisplay.textContent.length < 11) {
        displayValue += num;
        }
  }
  elDisplay.textContent = displayValue;
}

function writeOperation(OpSign) {
  //console.log('you pressed: ' + Opsign);
  if (OperationSign ==='') { //sign pressed for the first time
    OperationSign = OpSign;
    console.log('you pressed: ' + OperationSign);
    } else {//console.log('prepare for the operation');
    //console.log('op:'+OperationSign + ' :' + displayValueFirst + ' :' + displayValue  );
    executeOperation();
    //new operation prepare
    OperationSign = OpSign;
    displayValueFirst = displayValue;
    displayValue = undefined;
    //console.log(''+OperationSign + ' ; ' + displayValueFirst + ' ; ' + displayValue  );
    }
  
}

function executeOperation() {
  //the equl sign was pressed
  if(displayValueFirst !== undefined && 
     OperationSign !=='' &&
     displayValue !== undefined ) {
      console.log ('executre calcluation' )
      //console.log(operate(OperationSign, Number(displayValueFirst),Number(displayValue)));
      //console.log (typeof displayValueFirst )
      displayValue = operate(OperationSign, Number(displayValueFirst),Number(displayValue));
      //console.log(typeof displayValue + ', len:'+displayValue.toString().length )
      if(displayValue.toString().length > 8) { 
        if (displayValue < 99999999) {displayValue = displayValue.toPrecision(8)
        } else {displayValue = displayValue.toPrecision(5)}
      }
      OperationSign = '';
      displayValueFirst = undefined;
      document.getElementById("display").textContent= displayValue;
     }
}

function startFresh() {
  //reset the values
  displayValue = undefined;
 displayValueFirst = undefined;
 OperationSign = '';
 document.getElementById("display").textContent = "0";
 console.log('fresh start executed');

}

function executeSolo(Operation) {
  //the inverse sign was pressed
  if(displayValue !== undefined ) {
     console.log ('executre: ' + Operation  + ' on:' + displayValue );
     //console.log(operate(OperationSign, Number(displayValueFirst),Number(displayValue)));
     //console.log (typeof displayValueFirst )
     displayValue = operate(Operation,Number(displayValue));
     console.log(Operation + ' res:' + displayValue );
     //console.log(typeof displayValue + ', len:'+displayValue.toString().length )
     if(displayValue.toString().length > 8) { 
       if (displayValue < 99999999) {displayValue = displayValue.toPrecision(8)
       } else {displayValue = displayValue.toPrecision(5)}
     }
     //OperationSign = '';
     //displayValueFirst = undefined;
     document.getElementById("display").textContent= displayValue;
    }
}

function writePoint() {
  //console.log('write point to display number');
  let text1 = displayValue
  //check there is no point in the number already
  if (text1.search("\\.") === -1 ) {//no point found
  console.log(typeof text1);
  displayValue += '.'
  document.getElementById("display").textContent= displayValue;
  }
}
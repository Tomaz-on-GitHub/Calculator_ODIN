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
console.log(add(2,6));
console.log(subtract(12,8));
console.log(sum(24,2));
console.log(multiply(24,2));
console.log(divide(10,2));
console.log(power(5,3));
console.log(factorial(4));


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

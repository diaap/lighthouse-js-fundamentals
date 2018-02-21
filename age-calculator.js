//function name & 3 parameters
function ageCalculator(name, yearOfBirth, currentYear) {
  // create an empty variable to store the equation that you will set up for the function
  var result;
  // call the same empty variable and assign the equation to it
  result = name + ' is ' + (currentYear - yearOfBirth) + ' years old.'
  // in the return, the variable result will represent the answer of the equation
  return result;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
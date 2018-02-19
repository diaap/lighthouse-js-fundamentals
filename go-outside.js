*/

EXERCISE 1

var raining = true;
var cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

EXERCISE 2 IF ELSE

var cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

 */

var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// LOGICAL OPERATORS

// Here we're checking that both conditions, isCitizen and age > 18 are true for the if statement overall to evaluate to true.
// If any of our two conditions are false, then the whole expression is false.

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


// Here our if statement is true when temperature is either below -40 or above 40 degrees.

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

/* We read the expression in the next example usually as "if not raining",
but it's not always intuitive what "not true" or "not false" mean
unless you remember that the ! operator simply reverses the value of raining.
That is, if raining is true, !raining is false. If raining is false, !raining is true. */

if (!raining) {
  console.log("Leave your umbrella at home!");
}


/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

//assign function name and parameter
function laugh(num) {

  // create variable that will store for loop result; leave it empty
    var message ="";
    for (var i = 0; i < num; i++) {

      //call on the empty variable you created - it will now store the result of the for loop and string
        message = message + "ha";
    }

    // return that same variable again - it now holds the expression that was created after the for loop
    return message + "!";
}
console.log(laugh(3));



function laugh(num) {
    var message ="";
    for (var i = 0; i < num; i++) {
        message = message + "ha";
    }
    return message + "!";
}
console.log(laugh(3));
/*
 * Programming Quiz - Checking Your Balance (3-5)

 TIP: To print out the account balance with decimal points (i.e. 325.00), use the .toFixed() method and pass it the number of decimal points you want to use. For example, balance.toFixed(2) returns 325.00.
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === true) {
    if (isActive && balance > 0) {
        console.log('Your balance is $' + balance + '.');
    } else if (!isActive) {
        console.log('Your account is no longer active.');
    } else if (balance === 0) {
        console.log('Your account is empty.');
    } else {
        console.log('Your balance is negative. Please contact bank.');
    }
} else {
    console.log('Thank you. Have a nice day!');
}
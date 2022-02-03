// Problem Solving 5
function onlyPositive(myNumbers) {
    let positiveNumbers = [];
    for (const number of myNumbers) {
        if (number > 0) {
            positiveNumbers.push(number);
        }
        else if (number < 0) {
            return positiveNumbers;
        }
    }
    // return positiveNumbers;
}
let myNumbers = [8, 9, 10, -1, 7, 6, 2, 1, -1, -3, -5];
let positiveNumbers = onlyPositive(myNumbers);
console.log('My positive numbers before negative numbers', positiveNumbers);
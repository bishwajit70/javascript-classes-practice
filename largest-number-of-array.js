/* Larger Number of an array function */

function largestNumber(myNumbers) {
    let largestNumber = myNumbers[0];
    for (const element of myNumbers) {
        if (element > largestNumber) {
            largestNumber = element;
        }
    }
    return largestNumber;
}


let myNumbers = [19, 30, 40, 58, 53, 70, 20, 18, 12, 85];
let myLargestNumber = largestNumber(myNumbers);
console.log(myLargestNumber);


// Find lowest Number of an array function 

function lowestNumber(myNumbers) {
    let lowestNumber = myNumbers[0];
    for (const element of myNumbers) {
        if (element < lowestNumber) {
            lowestNumber = element;
        }
    }
    return lowestNumber;
}
let myNumbers = [19, 30, 40, 58, 53, 70, 20, 18, 12, 85, 6];
let myLowestNumber = lowestNumber(myNumbers);
console.log(myLowestNumber);
// Even Number Check Function 
function isEven(number) {
    if (number % 2 == 0) {
        return number + ' is even.'
    } else {
        return number + ' is odd.'
    }
}
var myNumber = 347;
console.log(isEven(myNumber));
// Find Even numbers from an array function 

function evenNumbers(numbers){
    let evenNumbers = [];
    for(const element of numbers){
        if(element % 2 == 0){
            evenNumbers.push(element);
        }
    }
    return evenNumbers;
}

var myNumbers = [3, 5, 7, 2, 12, 14, 17, 15, 34, 21];
var selectedEvens = evenNumbers(myNumbers);
console.log(selectedEvens);
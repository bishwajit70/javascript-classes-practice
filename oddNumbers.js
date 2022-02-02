// Find Odd numbers from an array function 

function oddNumbers(numbers){
    let oddNumbers = [];
    for(const element of numbers){
        if(element % 2 == 1){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

var myNumbers = [3, 5, 7, 2, 12, 14, 17, 15, 34, 21];
var selectedOdds = oddNumbers(myNumbers);
console.log(selectedOdds);
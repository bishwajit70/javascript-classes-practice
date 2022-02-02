// Odd number check function 
function isOdd(number){
    if(number % 2 == 1){
        return number + " is Odd"
    }
    else{
        return number + " is Even"
    }
}
var myNumber = 11;
console.log(isOdd(myNumber));
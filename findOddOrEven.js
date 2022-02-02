// Find odd and even numbers from an array 

function findOddOrEven(numbers) {
    let oddNumbers = [];
    
    for(const element of numbers){
        if(element % 2 == 1){
            oddNumbers.push(element);
        }
    }
    return oddNumbers; 
    // let evenNumbers = [];
    // for(const element of numbers){
    //     if(element % 2 == 0){
    //         evenNumbers.push(element);
    //     }
    // }
    // return evenNumbers; 
}

var numbersArray = [3, 5, 7, 2, 4, 10, 12, 13, 15, 16, 17, 18, 20, 21];

var myOddNumbers = findOddOrEven(numbersArray);

console.log("Odd Numbers", myOddNumbers);
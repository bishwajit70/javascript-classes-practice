// Find duplicate numbers of an array Function 

function findDuplicate(numbers){
    let duplicates = []
    for(const element of numbers){
        if(duplicates.indexOf(element) == -1){
            duplicates.push(element);
        }
    }
    return duplicates;
}

var myNumbers = [3, 3, 4, 3, 11, 12, 14, 11, 8, 8];
var selectedNumbers = findDuplicate(myNumbers);
console.log(selectedNumbers);
// Checklist 
/* 1(a) string type variable declare */
var myName = "Bishwajit Mondal";

/* 1 (b) number type varialbe declare */
var myAge = 51;

/* 1 (c) boolean type variable declare  */

var isHot = true;

/*  2. let keyword variable declare  */

let myColor = "Red";
myColor = "Blue";
console.log(myColor);

const myCountryName = "Bangladesh";
// myCountryName = "Iran" 
// cannot be assign because myCountryName variable is declared with "const" keyword.
// console.log(myCountryName);

// 3. using +, -, *, / and %
let number1 = 12;
let number2 = 13;
let addResult = number1 + number2;
console.log(addResult);

let substractResult = number2 - number1;
console.log(substractResult);

let multiplyResult = number1 * number2;
console.log(multiplyResult);

let divideResult = number1 / number2;
console.log(divideResult);

let restResult = number2 % number1;
console.log(restResult);

// 4. Comparison of two numbers by different comparison operators
let yourAge = 42;
let hisAge = 42;

if (yourAge > hisAge) {
    console.log("Your Age is higher");
}
else if (yourAge < hisAge) {
    console.log("His age is higher.");
}
else if (yourAge == hisAge) {
    console.log("Your and his ages are same aged.")
}
else if (yourAge != hisAge) {
    console.log("Your age and his age is not same");
}
else if (yourAge <= hisAge) {
    console.log("Your age is higher or equal");
}
else if (yourAge >= hisAge) {
    console.log("Your age is lower or equal");
}

// 5. Checklist number five or && or || operator use

let myTime = 10;
let isSunny = true;
if (myTime == 10 && isSunny == true) {
    console.log("I will go out to see you.")
}

let isCold = true;
let dayTemperature = "20c"
if (isCold == false || dayTemperature == "20c") {
    console.log("I will see you in the river bank.");
}

// 6 No. Checklist if else use
let price = 222;
if (price == 20) {
    console.log("I will buy the product.");
} else {
    console.log("I will not buy the product.");
}

// Checklist No. 7 while loop check

let i = 7;
while (i <= 19) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
}

// Checklist No. 8 Declare Array and find element operation, push(), pop(), change an element.

let students = ["Hablu", "Karim", "Rahim", "Salam", "Ataur", "Mohammad", "Salamat"];
console.log(students.length);
students[4] = "Alam"
console.log(students);
students.push("Sabuj", "Arman");
console.log(students);
students.pop();
students.pop();
console.log(students);

// Checklist No. 9 Show all element of an array with for loop.

let myfriends = ["Tapu", "Apu", "Liup", "Mintu", "Sentu", "Laltu"];
for (let i = 0; i < myfriends.length; i++) {
    console.log(myfriends[i]);
}

for (const friend of myfriends) {
    console.log(friend);
}

// Checklist No. 10 Show all element of an array with for loop.

let myNumbers = [70, 80, 82, 83, 87, 88, 89, 100];
let largeNumber = 80;
for (let number of myNumbers) {
    if (number > largeNumber) {
        console.log(number);
    }
}
for (i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > largeNumber) {
        console.log(myNumbers[i]);
    }
}

// Checklist No. 11 multiply three numbers and show the result. 

let numbers1 = 2;
let numbers2 = 3;
let numbers3 = 4;
function multyplyNumbers(num1, num2, num3) {
    let total = num1 * num2 * num3;
    return total;
}
let result = multyplyNumbers(numbers1, numbers2, numbers3);
console.log(result);

// Checklist No. 12 declare an object and change an object property.

let myClassmates = {
    name: "Chitta",
    address: "Smashanbari",
    age: 54
}
myClassmates.address = "South Chayabithi";
console.log(myClassmates);

// Problem Solving 1

function feetToInch(feet) {
    let inch = 1;
    inch = feet * 12;
    return inch;
}
let myfeet = 3;
let myInchResult = feetToInch(myfeet);
console.log(myInchResult);

// Problem Solving 2
function centimeterToMeter(centimeter) {
    let meter = 1;
    meter = centimeter / 100;
    return meter;
}
let myCentimeter = 540;
let myMeter = centimeterToMeter(myCentimeter);
console.log(myMeter);

// Problem Solving 3
function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    let firstBookPaperRequirement = firstBookCopy * 100;
    let secondBookPaperRequirment = secondBookCopy * 200;
    let thirdBookPaperRequiremnt = thirdBookCopy * 300;
    let totalpaperRequirements = firstBookPaperRequirement + secondBookPaperRequirment + thirdBookPaperRequiremnt;
    return totalpaperRequirements;
}
let firstBookCopy = 1;
let secondBookCopy = 2;
let thirdBookCopy = 1;
let myPaperRequrement = paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy);
console.log(myPaperRequrement);

// Problem Solving 4
function bestFriend(myBestFriends) {
    let largename = myBestFriends[0];
    console.log(largename.length);
    for (let i = 0; i < myBestFriends.length; i++) {
        if (myBestFriends[i].length > largename.length) {
            largename = myBestFriends[i];
        }
    }
    return largename;
}
let myBestFriends = ['Chitta Ranjan', 'Tusher', 'Nishith Kumar Banik', 'Solaiman Haider Sarkar Bhuiyan', 'kabir', 'Ikhtiar Udddin Muhammad Bin Bakhtiar Khilji'];
let myBestFriend = bestFriend(myBestFriends);
console.log("My best friend is ", myBestFriend);


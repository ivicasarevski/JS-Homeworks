//alert("hello! this is my first hello!");

//console.log("hello from JavaScript!");


//******************* VARIABLES - DECLARATION AND INITIALIZATION *******

let randomNumber;
randomNumber = 15;

let myName = "Martin";
let secondName = 'Angela';
let someSentence = "Hello! I'm learning JS\n and it is awesome";

let number1 = 5;
let number2 = 10;

let notDefined;

let isRaining = false;
let nullValue = null;

console.log(secondName);
console.log(myName);
console.log(number1);
console.log(someSentence);
console.log(notDefined);

console.log("--------------------------------------------------");
//******************* VARIABLES TYPES *******

console.log(typeof randomNumber);
console.log(typeof myName);
console.log(typeof isRaining);
console.log(typeof notDefined);
console.log(typeof nullValue);

console.log("--------------------------------------------------");

//*******************************************ARITMMETIC OPERATORS **********************

//BAD Practice
console.log(3 + 2);



let num1 = 50;
let num2 = 25;
let num3 = 25.5;

let addition = num1 + num2;
console.log(addition);

let subtruction = num2 - num3;
console.log(subtruction);

let multiplication = num2 * num3;
console.log(multiplication);


let division = num1 / num2;
console.log(division);

let remainder1 = num1 % num2;
console.log("Reminder1", remainder1);

let remainder2 = num1 % num3;
console.log("Reminder2", remainder2);

let  a = 10;
a++;
console.log(a);
a--;
console.log(a);
a += num1;
console.log(a)


let isGreaterThen = num1 > num2;
let isEqualWith = num1 == num2;

console.log(isGreaterThen);
console.log(isEqualWith);


console.log("--------------------------------------------------");

// ****************** Class Exercise ******

let feetValue = 328;
let conversionRate = 0.3048;
let meterValue = 200;


let feetToMeter = feetValue * conversionRate;
let meterToFeet = meterValue / conversionRate;


console.log("feetToMeter", feetToMeter);
console.log("meterToFeet", meterToFeet);

console.log("----------------------------------------------------");


// *************** Exersize 1 ******

let firstSide = 10;
let secondSide = 8;

let rectangleArea = firstSide * secondSide;

console.log("Rectangle Area", rectangleArea);

console.log("----------------------------------------------------");

// *************** Exerise 2 ******

let R = 30;
let P  = 3.14159;

let circleArea = (R * 2) * P;
console.log("Circle Area", circleArea);


console.log("----------------------------------------------------");

// ***************** Homework ********

let phonePrice = 119.95;
let taxPerPhone = 0.05;
let numberOfPhones = 30;


let taxForOnePhone = phonePrice * taxPerPhone;
console.log("tax For One Phone", taxForOnePhone);

let priceForOnePhoneWithTax = phonePrice + taxForOnePhone;
console.log("Price For One Phone With Tax", priceForOnePhoneWithTax);

let totalPriceWithoutTax = phonePrice * numberOfPhones;
console.log("Total Price Without Tax", totalPriceWithoutTax);


let totalPriceWithTax = priceForOnePhoneWithTax * numberOfPhones;
console.log("Total Price Tax Included", totalPriceWithTax);












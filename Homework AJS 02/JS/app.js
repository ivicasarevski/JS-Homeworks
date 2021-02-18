// ----------------- Homework 01 ---------------------

const numArray = [2,4,6,8,10];


let multiplier = 20;
const mappedNumArray = numArray.map((element) => element * 10)
 

console.log(mappedNumArray);


// ------------ Bonus ---------------


const numArray1 = [2,4,6,8,10];



const mappedNumArray1 = numArray1.map((element, multiplier) => {
    multiplier = 8;
    return element * multiplier;
})
 

console.log(mappedNumArray1);


// ----------------- Homework 02 -------------------------


const numbersArray = [38,15,78,84,22,96,34,3,42,44,,67,73,77,,82,18,89,35,92,45];

const filteredNumbersArray = numbersArray.filter((element, divider)=>{
    divider = 3;
    if (element % divider === 0){
        return true;
    } else{
        return false;
    }   
})

console.log(filteredNumbersArray);

// ------------------ Bonus -----------------------

filteredNumbersArray.sort((first,second) => first - second);

console.log(filteredNumbersArray);







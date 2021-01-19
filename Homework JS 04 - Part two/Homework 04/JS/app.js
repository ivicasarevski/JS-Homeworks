

let studentsFirstNames = ['David', 'John', 'Jane', 'Bill', 'Jennifer'];
let studentsLastNames = ['Beckham', 'Fuller', 'Robinson', 'Jordan', `Butler`];

let firstNameLastName = [];


function fullName(){
let i = 0; listNum = 1;
    
 while(i < studentsFirstNames.length){
    firstNameLastName.push(`${listNum}. ${studentsFirstNames[i]} ${studentsLastNames[i]}`);
    i++;
    listNum++;
} return firstNameLastName;

} 
    

console.log(fullName());

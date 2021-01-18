// // ************ Homework #2 - Bonus ***************

let numbersArray2 = [65,54,6,73];


function validateNumber(x,y,z,w){
    if ((isNaN(x)) || (isNaN(y)) || (isNaN(z)) || (isNaN(w))) {
        console.log(`error`);
    } else {
        let result = x + y + z + w;
        console.log(result);
    }
}
    
   

validateNumber(numbersArray2[0], numbersArray2[1], numbersArray2[2], numbersArray2[3]);
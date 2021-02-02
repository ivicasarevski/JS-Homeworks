let num = 100;

let myArray = [];

let myArray1 = [];

 for (let i = 0; i < num; i++){
     myArray.push(i+1);
     
 }
 



 function getDividableNumbers(){
    for (let j = 0; j < num; j++){
        if(myArray[j] % 7 === 0 && myArray[j] % 3 === 0 ){
            myArray1.push(myArray[j])
        } 
    } console.log(myArray1);
}

getDividableNumbers();

//------------------------- B O N U S ---------------------------



 



//  function getDividableNumbers(num){
//     let myArray = [];

//     let myArray1 = [];
    
//      for (let i = 0; i < num; i++){
//          myArray.push(i+1);
         
//      }


//     for (let j = 0; j < num; j++){
//         if(myArray[j] % 7 === 0 && myArray[j] % 3 === 0 ){
//             myArray1.push(myArray[j])
//         } 
//     } console.log(myArray1);
// }

// getDividableNumbers(500);




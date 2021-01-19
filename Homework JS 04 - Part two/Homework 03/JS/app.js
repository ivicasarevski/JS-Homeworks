let myArray = [22,54,23,56,98,334,22,246, 545,32,435,];



function findMax(myArray){

    let max = -Infinity;
    let count = 0;

    while (count < myArray.length){
        if(myArray[count] > max){
            max = myArray[count];
        } 
    
        count++;
    }
    
    return max;
}



max1 = parseInt(`${findMax(myArray)}`);

function findMin(myArray){

    let min = +Infinity;
    let count = 0;

    while (count < myArray.length){
        if(myArray[count] < min){
            min = myArray[count];
        } 
    
        count++;
    }
    
    return min;
}


let min1 = parseInt(`${findMin(myArray)}`);

let sum = max1 + min1;


console.log(`Max: ${max1}`, `,`, `Min: ${min1}`,`,`, `Sum: ${sum}`);






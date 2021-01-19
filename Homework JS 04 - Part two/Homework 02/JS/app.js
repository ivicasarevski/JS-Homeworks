let numString = [];

for(i = 1; i <= 20; i++){
    if (i % 2 !== 0){
        numString.push(i, ` `);
    }
         else {
            numString.push(i, "\n");
        }
        

} 


let numString1 = numString.join(``);
console.log(numString1);
function anyString(any){
    result = [];
    
    for(i = 0; i < any.length; i++){
        
        if(typeof any[i] === `string`){
            
            result.push(any[i]);                
        }
        
    }  return result;
    
    
} 

let stringArray = [`Hello`, `there`, `students`, `of`, `SEDC`, `!`];
anyString(stringArray);

let newString = result.join(' ');
console.log(` "${newString}"`);

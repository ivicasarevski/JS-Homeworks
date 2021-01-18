

function parameter(x) {
    let result = x;
    return (typeof x); 
    
}

console.log(parameter("Dog"));
console.log(parameter(2021));
console.log(parameter(true));
console.log(parameter(null));
console.log(parameter(undefined));
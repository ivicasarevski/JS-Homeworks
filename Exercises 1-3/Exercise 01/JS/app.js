
let namesArray = ["Bill", "Ana", "Josephine", "Elena"];
let namesLengthArray = [];


function mapToArrayElementsLength(){
    for(let i = 0; i < namesArray.length; i++){      
        namesLengthArray[i] = namesArray[i].length;      
    }

    console.log(namesLengthArray);
}

mapToArrayElementsLength();


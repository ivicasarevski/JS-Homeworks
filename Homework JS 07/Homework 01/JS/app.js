

function Animal(animName, kind){
    this.animalName = animName;
    this.animalKind = kind;

    this.animalSpeak = function(){
        console.log(`${this.animalKind}.speak("hey bro!!!")`);
        return `${this.animalName} says: Hey bro!!!`          
    }
}

let animName = prompt("Please enter animal name");
let kind = prompt("Please enter animal kind");

let animal1 = new Animal(animName, kind);

console.log(animal1.animalSpeak());

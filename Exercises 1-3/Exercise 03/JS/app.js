
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let phone1 = document.getElementById('phone');

let saveBtn = document.getElementById('saveBtn');

let phoneBook = [];


function NewUser(firstName, lastName, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
}

function addNewContact(){
    saveBtn.addEventListener("click", function(){
        
        let newUser = new NewUser(newUser.firstName, newUser.lastName, newUser.phone);
        newUser.firstName = fName.value;
        newUser.lastName = lName.value;
        
        
    }
    )}

    

addNewContact();
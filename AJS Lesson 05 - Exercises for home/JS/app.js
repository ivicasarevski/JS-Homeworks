// ------------------------ Exercise 01 ------------------

const arrayOfStrings = ["Goran", "Dejan", "Ivan", "Ana", "Petar", "Vesna"];

arrayOfStrings.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`)       
})

// --------------------- Exercise 02 ------------------------

const myDiv = document.getElementById("myDiv");

const numArray = [3,6,9,12,15,18];

const concatenate =()=> {
    myDiv.innerHTML = `<p>${numArray.join()}</p>`
}
concatenate();

// --------------------- Exercise 03 ----------------------------

const stringArray = ["Apple", "Orange", "Pear", "Lemon", "Pineapple", "Bannana", "Strawbery"];

const filteredStringArray = stringArray.filter((element) => element.length > 5);

console.log(filteredStringArray);

// ----------------------- Exercise 04 --------------------------

fetch("https://jsonplaceholder.typicode.com/users/")

.then(response=>{
    return response.json();
})
.then(data => {
    console.log(data);
    for (const user of data) {
        user.age= `${Math.floor((Math.random() * 62) + 18)}`;
        console.log(user);
    }
})
.catch(error =>{
    console.log(error);
})










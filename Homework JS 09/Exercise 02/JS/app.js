let userName = document.getElementById("input1");
let passWord = document.getElementById("input2");



let logBtn = document.getElementById("btn");

let courses = ["Geography", "Biology", "Physics", "English", "History"];
let homeworks = ["Homework 1", "Homework 2", "Homework 3", "Homework 4"];


logBtn.addEventListener("click", logIn);
logBtn.addEventListener("click", displayItem);



function logIn(){
    let userName1 = userName.value;
    let passWord1 = passWord.value;
  

    if (userName1 === "" || passWord1 === ""){
         alert("Please fill out the required fields!");  
    
    } else {
         alert(`Welcome to SEDC ${userName1} `);
    }

}

 function displayItem(){

    let role = prompt("pease enter your role: trainer/assistant/manager");
    if(role === "trainer"){
        console.log(`Here are your courses: ${courses}`);
    } else if (role === "assistant"){
        console.log(`Here are your homeworks: ${homeworks}`);
    } else if (role === "manager"){
        console.log ("This feature is in progress!")
    }
}
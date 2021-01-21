let newArray = [3,6,12,2,45];

let newList = document.getElementById(`1`);
newList.innerText = `${newArray[0]}`;

let newList1 = document.getElementById(`2`);
newList1.innerText = `${newArray[1]}`;

let newList2 = document.getElementById(`3`);
newList2.innerText = `${newArray[2]}`;

let newList3 = document.getElementById(`4`);
newList3.innerText = `${newArray[3]}`;

let newList4 = document.getElementById(`5`);
newList4.innerText = `${newArray[4]}`;

let result =+  newArray[0] + newArray[1] + newArray[2] + newArray[3] + newArray[4];

let myText = document.querySelector(`text`);
myText.innerText = `${result}`;
 
let newParagraph = document.querySelector(`#par`);
newParagraph.innerText = `${newArray[0]} + ${newArray[1]} + ${newArray[2]} + ${newArray[3]} + ${newArray[4]} = ${result}`;


function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  
}
let emp1 = new Employee('Ivica', 'Sarevski');
let emp2 = new Employee('Goran', 'Petrovski');
let emp3 = new Employee('Petar', 'Panov');

let emp4 = new Employee('Ana', 'Milikj');
let emp5 = new Employee('Zoran', 'Stankovski'); 
let employeesList = [emp1, emp2, emp3, emp4, emp5]; 


function searchUser (){     
    let user = prompt("Please enter employee's name!");    
    
    
    let i = 0;
    listNum = 1;
    while (i < employeesList.length){
        if(user === employeesList[i].firstName){
        console.log(listNum + "." + user);       
        } i++;
        listNum++;
} 
}

searchUser();
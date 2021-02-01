function Employee(firstName, lastName, sector) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sector = sector;
}
    
let emp1 = new Employee('Ivica', 'Sarevski', 'HR');
let emp2 = new Employee('Goran', 'Petrovski', 'Operations');
let emp3 = new Employee('Petar', 'Panov', 'Logistics');

let emp4 = new Employee('Ana', 'Milikj', 'HR');
let emp5 = new Employee('Zoran', 'Stankovski', 'Logistics'); 

    let oldUsers = [emp1, emp2, emp3];
    let migratedUsers = [emp4, emp5];

 function printItems (){
    

    let i = 0;
    listNum = 1;
    while(i < oldUsers.length){
    console.log(listNum, oldUsers[i].firstName);
    i++;
    listNum++;
}

console.log("----------------------")
    let x = 0;
    listNum1 = 1;
    while(x < migratedUsers.length){
    console.log(listNum1, migratedUsers[x].firstName);
    x++;
    listNum1++;    
}
    
}

printItems();



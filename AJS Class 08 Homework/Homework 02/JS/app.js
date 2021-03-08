let bootstrapCard = document.getElementById("user");
let bootstrapCardData = document.getElementById("tableData");


async function getUsers() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);
        displayData(users); 
        console.log('--------------------------');
        console.log(`Everything is done in ${Math.round(performance.now())} ms!`);
    }

    catch (err) {
            console.log(err.message);
        }
}

getUsers();

 function displayData (users) {
     let bootstrapCardData = '';
     bootstrapCard.innerHTML = '';
    
    for (const user of users){
         console.log(user.name);
         bootstrapCardData += `
         <ul>
         <li>${user.name}</li>
         </ul>
         `        
    }

    bootstrapCard.innerHTML = bootstrapCardData;
}
  


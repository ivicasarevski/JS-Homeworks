let btnFetch = document.getElementById("btnFetch");
let tblBody = document.getElementById("table");
let tableData = document.getElementById(("tableData"));

let ascBtn = document.getElementById("ascend");
let descBtn = document.getElementById("descend");



ascBtn.addEventListener("click", function(){
    async function getPosts() {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            console.log(posts);
            displayData(posts); 
            console.log('--------------------------');
            console.log(`Everything is done in ${Math.round(performance.now())} ms!`);
        }
    
        catch (err) {
                console.log(err.message);
            }
    }
    
    getPosts();
    
     function displayData (posts) {
         let tableData = '';
         tblBody.innerHTML = '';
         
        for (const post of posts){
           
             console.log(post.id , post.title);            
             tableData += `
             <tr>
             <td>${post.id}</td>
             <td>${post.title}</td>
             </tr>
             `        
        }
    
        tblBody.innerHTML = tableData;
    }
})

descBtn.addEventListener("click", function(){
    async function getPosts() {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            
            console.log(posts);      
            displayData(posts); 
            console.log('--------------------------');
            console.log(`Everything is done in ${Math.round(performance.now())} ms!`);
        }
        catch (err) {
                console.log(err.message);
            }
    }
    
    getPosts();
   
     function displayData (posts) {
         let tableData = '';
         tblBody.innerHTML = '';

        posts.sort((a,b) => b.id - a.id)
        for (const post of posts){
            console.log(post.id, post.title)

             tableData += `
             <tr>
             <td>${post.id}</td>
             <td>${post.title}</td>
             
             </tr>
             `        
        }
    
        tblBody.innerHTML = tableData;
    }
})
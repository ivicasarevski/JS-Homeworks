
let getBtn1 = document.getElementById("getBtn1");
let getBtn2 = document.getElementById("getBtn2");

getBtn1.addEventListener("click", function(){
    console.log('Getting teams from API, please wait!');
$.ajax({
    url:"https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League",
    method: 'GET',
    success: function(response){
        console.log(response);
            
    },
    error: function(error){
        console.log(error);
    }
})
});


//Fetch method

getBtn2.addEventListener("click", function(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>{
    return response.json();
})
.then(data => {
    console.log(data);
    let posts = data;
    for (const post of posts ) {
        console.log(post.title);
    }
})
.catch(error =>{
    console.log(error);
})
});
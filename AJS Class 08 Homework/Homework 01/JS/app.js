// ----------------  Homework 01  ----------------

const getDocuments =()=> {
    return new Promise ((resolve, reject) => {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: 'GET',
            
            success: (response)=> {
                resolve(response);
                
            },
            error: (error)=>{
                reject(error);
            }
        })
    })
}

function showDocuments(documents){
    
    documents.forEach(doc => {
        console.log(doc);
    });
}


getDocuments()

.then(data => {
    console.log("We got the documents!");
    setTimeout(() => {
        showDocuments(data);
    },1000) 
})
.catch(error => console.log(error.message));

















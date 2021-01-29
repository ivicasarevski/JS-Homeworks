$(document).ready(function(){


    let input = $("#input");
    let button = $("button");
    let divResult = $("#div");

    button.on("click", function(){
        let greetMessage = `Hello there ${input.val()} !`
        divResult.html(`<h1>${greetMessage}</h1>`)
    })


})
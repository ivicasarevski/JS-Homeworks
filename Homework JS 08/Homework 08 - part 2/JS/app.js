$(document).ready(function(){

let textInput = $("#input1");
let colorInput = $("#input2");

let genBtn = $("#button1");

let h3element = $("#h3Messages");

genBtn.on("click", function(){
    let newColor = colorInput.val();
    
     if((textInput.val() === "") || isColor(newColor) === false ){
        h3element.text("Error!")
     } else {
        h3element.text(textInput.val());
        h3element.css("color", `${colorInput.val()}`);
        
    }
    
})

function isColor(newColor1){
    let s = new Option().style;
    s.color = newColor1;
    return s.color == newColor1;
}


})
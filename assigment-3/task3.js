var colours = ["red", "yellow","green"];

var userInput= prompt("what colour you want to add in beginning");
var checkInput = userInput.toLowerCase();
if (checkInput === ""){
    document.write(colours);
}
if (checkInput){
    colours.shift
document.write(checkInput + "  " + colours);
}








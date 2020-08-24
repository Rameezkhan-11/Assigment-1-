var colours = ["orange","black","blue"];
var userInput = prompt("What colour you want to add in end??? ");
var checkInput = userInput.toLowerCase();
if (checkInput){
    colours.push(checkInput);
    document.write(colours);
}
var colours = ["Red","Yellow","Green"];
document.write("Before adding: " +colours);
var userInput = prompt("Which index you wants to add a colour???");
var shiftInput = prompt("Tell me a colour i will add in a index where you want???");
colours.splice(userInput,0, shiftInput);
document.write("<br>After update: " +colours);
var colours = ["Red","Yellow","Green"];
document.write("Before update; " + colours);
var userInput = prompt("In which index you wants to delete colours???");
var deleteIndex = prompt("How many colours you want to delete???");
colours.splice(userInput,deleteIndex);
document.write("<br>After update; " +colours);
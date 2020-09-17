var userInput = Number(prompt("Write a Number"));
document.write("Number: " + userInput);
// var number = Math.round(userInput);

if(userInput > 0){
    document.write(" <br> Round: "+ Math.round (userInput));
    document.write("<br> Floor: " + Math.floor(userInput));
    document.write("<br> Ceil: " + Math.ceil(userInput))
}


console.log(userInput);
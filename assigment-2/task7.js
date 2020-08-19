var firstNumber = (Number (prompt("First number")));
var secondNumber = (Number(prompt("Second number")));
var operation = prompt("Operation");
if (operation === "+"){
    document.write( "Additon " +  (firstNumber + secondNumber));
}
 if (operation === "-"){
    document.write( "Substraction " +  (firstNumber - secondNumber));
}
 if (operation === "/"){
     document.write("Divison " + (firstNumber / secondNumber));
 } 

if (operation === "*"){
    document.write("Multiplication " + (firstNumber * secondNumber));
}
if (operation === "%"){
    document.write("Remainder " + (firstNumber % secondNumber));
}






var userInput = prompt("Write a number to find a mean number");
// console.log((Number(userInput.charAt(i))) + (Number(userInput.charAt(i))));
var meanNumber = userInput.split("");              
document.write("Input: " + userInput);



var l = userInput.length;

var sum = 0;



for (var i = 0; i < userInput.length; i++){

	sum = sum + Number(meanNumber[i]);

	
}
var total = sum/l;

document.write("<br><br> Mean of Digits is: "+ Math.round(total));





















          









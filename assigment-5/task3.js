var userInput = prompt("Write a word i will tell you its palindrome or not");
var found = true;
function palindrome(){
for(var i = 0; i < userInput.length; i++){
 
if(userInput.charAt(userInput[i]) === userInput.charAt(userInput.length -1)){


   
    console.log(userInput+ " Is palindrome");
    break;

}
else{

console.log(userInput + " Is Not palindrome");
break;

}



}


}



palindrome(userInput);

var password = 1234;
var userInput = prompt("Please enter yout password");
var usI = prompt("Reconfrim password");
if ( userInput == password && usI == password){
  alert("Correct the passwords you enters matches original password");
}
else if (userInput != password){
  document.write("Incorrect password: " + userInput);
  
}
else if (usI != password){
  document.write("Reconfirm password incorrect " + usI);
}





if (userInput == ""){
  prompt("Please enter your password");
}


var userInput = prompt("Write a password");

var restricted = "¬`!£$%^&*()-_+={}[]@'~#:;<>,.?/"


for(var i = 0; i < userInput.length; i++){
  
  // console.log(restricted.indexOf(userInput.charAt(i)));
  if(restricted.indexOf(userInput.charAt(i)) !== -1 ){
  
  
    alert("For character codes of a-z, A-Z & 0-9")  

    break;    
}  

}    
    
    

 if (userInput.charAt(0) >= 0){
          alert("Don't add a number in starting of a password");
  }
  
 else if(userInput.length < 8){
     alert("Atleast 8 characters");
 }




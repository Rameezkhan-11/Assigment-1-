var userInput = prompt("Enter your email adress");

if(userInput.indexOf("@") < 1 || userInput.indexOf("@") > userInput.length -5 || userInput.indexOf("@") == -1){

    alert("Invalid Email address");



}


else if(userInput.indexOf(".") == userInput.indexOf("@") +1 || userInput.indexOf(".") > userInput.length -4 || userInput.indexOf(".") !== userInput.length -4  ){



    alert("Invalid Email address")


}


    else("Email address valid")
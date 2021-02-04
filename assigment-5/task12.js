// var userInput = prompt("Guess a secret number");
var secret = Math.floor(Math.random() * 101);
console.log(secret);
var i = 1;
 while(i <= 3){

var userInput =   prompt("Guess a number")
// userInput;
i++;

};
if(userInput == secret.toLocaleString()){


    console.log("Won");
    

}
if(userInput !== secret.toLocaleString()){


        console.log("Loss");
}

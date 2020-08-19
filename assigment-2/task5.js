
var guessGame =(Number (prompt("What is secret Number")));

var secretNumber = 4;
if (guessGame === secretNumber){
    alert("Bingo! Correct Answer");

}
 secretNumber = ++secretNumber;
if (guessGame === secretNumber){
    alert("Close enough to secret number");
}
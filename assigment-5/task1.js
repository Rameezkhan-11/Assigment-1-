var userInput = Number(prompt("Input Number"));

function factorial(f){
if(f <= 1){

return 1;

}
else{

return f * factorial (f-1);


}


}



document.write("Factorial of  "+ userInput+ " is " +factorial(userInput));

var inputNumber = Number(prompt("Tell me a number to confirm its positive,negative or zero"));
if (inputNumber == 0 ){
    document.write("Zero");
}

else if (inputNumber  > 0){
    document.write("Positive");
}

  else if (inputNumber < 0) {
      document.write("Negative");
  }
console.log(inputNumber);

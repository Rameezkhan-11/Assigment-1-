var inputText = prompt("Enter a word is vowel or not?");
var checkInput = inputText.toLowerCase();
if (checkInput === "a" ||
    checkInput === "e" ||
    checkInput === "i" ||
    checkInput === "o" ||
    checkInput === "u") {
    alert("True");
    document.write("Your input word " + inputText + " is a vowel ");

}

else {
    alert("False");
    document.write(inputText + " is not a vowel");
}
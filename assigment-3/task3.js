var colours = ["red", "yellow","green"];

var userInput= prompt("what colour you want to add in beginning");
var checkInput = userInput.toLowerCase();
if (checkInput === ""){
    document.write(colours);
}

if (checkInput == colours[0]) {
    document.write(colours);
     
}   
    else if (checkInput == colours[1]){
         document.write(colours[1] + " " + "  "  +colours[0]+ "  " + colours[2]);

    
    }
else if (checkInput == colours[2]){
    document.write(colours[2] +" " + " " +colours[0]+"  " +colours[1]);
}








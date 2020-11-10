var userInput = prompt("Write a text i will tell you the counts of vowels");

// var c;

function vow(){
for(var i = 0; i <= userInput.length; i++){

 c =  userInput.match(/["a","e","i","o","u"]/g);
    document.write( "<h1> This is a count of vowel " +   c.length + " </h1>");
break;




}


}

















vow();
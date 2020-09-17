var userAge = prompt("What is your age??")
var year = new Date();
document.write("<h1> Your Age: " + userAge +" </h1>");


var birthYear =  year.getFullYear() - userAge;

document.write("<br> <h1>Your Birth Year is: " + birthYear  + "</h1>")
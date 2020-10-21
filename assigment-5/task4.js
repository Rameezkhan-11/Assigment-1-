var userInput = (Number(prompt("Calculate properties of circle")));
function calcCircumference(){

  return  (userInput * 2)*3.14




}

var radius =calcCircumference(userInput);
document.write( "This is radius" +radius)
console.log(radius);
function calcArea(){


return(radius * radius)*3.14





}

var area =  calcArea();
document.write("<br>This is area "+ area.toFixed(2));
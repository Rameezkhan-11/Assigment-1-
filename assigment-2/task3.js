var  a = 4;
if (++a === 5){
    alert("Given condition to vairable a is true");
}
document.write("First alert Display the value of ++a is: " + a);
var b = 82;

 if (b++ === 83){
     alert("Given condition to variable b is true");
}
  document.write("<br>Second alert not displayed the value of b++ is: " + b);
 var c = 12;
  if ( c++ === 13){
      alert("Condition 1 is true");
   }
document.write( "<br> Third alert is not displayed the value of C++ is: " + c);
if (c === 13){
    alert("Condition 2 is true");
}
document.write("<br> Fourth alert displayed the value of c: " + c);
if (++c < 14){
    alert("Conditon 3 is true");
}
document.write("<br> Fifth alert is not displayed the value of ++c < 14 is: " + c)
if ( c === 14){
    alert("Condition 4 is true");
}
document.write("<br> Sixth alerts displayed the value of c is :" +c);

var materialCost = 2000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;
if ( totalCost === labourCost + materialCost){
    alert("The costs equal");
}

document.write("<br> alert is running the value of totalCost === labourCost + materialCost is equals the totalCost is: " + totalCost);
if (true){
    alert("True");
}
document.write("<br> conditon is true alert running");
if (false){
    alert("False");
}
document.write("<br>Condition not true alert not displayed")
if ("car" < "cat"){
    alert("Car is smaller then cat");
}
document.write("<br> Conditon is true alert running");
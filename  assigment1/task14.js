var a = 2;
var b = 1; 
 var result = --a - --b + ++b + b--;
--a;
document.write(" a  is " + a )
--a - --b;
document.write("<br> a is " + a);
document.write("<br> b is " + b);
--a - --b + ++b;
document.write("<br> a is " + a);
document.write("<br> b is " + b);
--a - --b + ++b + b--;
document.write("<br> a is " + a);
document.write("<br> b is " + b);
document.write("<br> Result is " + result);
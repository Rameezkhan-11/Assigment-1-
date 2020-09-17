var time = new Date();
document.write("<h1> Current Date: " +time + " </h1>");
var ms = time.getTime();


document.write(" <br> <h1> Elapsed Miliseconds Since January 1, 1970: "+ ms + "</h1>");

var seconds = ms / 1000;

var minute = ms / 1000 / 60;

document.write("<br> <h1> Elapsed minutes since januray 1, 1970:  " + minute);


console.log(seconds / 60);




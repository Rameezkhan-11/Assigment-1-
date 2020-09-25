var time = new Date();
document.write("<h1> Current Date and Time: "+ time+  " </h1>");


// var hour = time.getHours();

// console.log(hour);


var newTime = new Date();
newTime.setHours(-1);
document.write("<br> <h1>1 Hour ago, it was: " +newTime + " </h1>");

console.log(time.getHours() - 1);
var time = new Date();
document.write("<h1> Current Date and Time: "+ time+  " </h1>");


// var hour = time.getHours();

// console.log(hour);

//  time.setHours(16);
var yes =  console.log(time - time.getHours(-1) * 1000 * 60 * 60 * 24);    

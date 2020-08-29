// var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

document.write("Counting ")
for ( var i = 1; i <= 15; i++){
    
    document.write(i + "  ");

}

document.write("<br> Reverse:");
for (var i = 10; i > 0; i--){
    document.write(  i + " " );
}

document.write("<br> Even: ");

for (var i = 0; i <= 20 ; i++){
    if (i % 2 === 0){
    document.write( i + " ");
    
    }
}

 document.write("<br> Odd: ")
 for (var i = 0; i <= 20; i++){
     if(i % 2 !== 0){
         document.write(i + " ");
     }
 }
 document.write("<br> Series: ")
for(var i = 1; i <= 20; i++){
    if(i % 2 === 0){
     document.write( i + "k "); 
    }

}

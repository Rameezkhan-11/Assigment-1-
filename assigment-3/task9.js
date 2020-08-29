var numbers = [24,53,78,91,12];
document.write("Array Items: " +numbers);
 for(var i = 0; i <=numbers.length; i++){
    if(numbers[i] === 91){
        document.write("<br>The largest number is " +numbers[i]);
    }
 }
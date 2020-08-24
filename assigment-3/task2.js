var students = ["Rameez", "Salman", "Saalim"];
var score = [300 , 330, 320];
for(var i = 0; i < students.length; i++){
    if (i == 0){
        document.write("Score of " + students[0] + " is " + score[0] +" . Percentage is: " + score[0] / 500 * 100 + " % " );
    }

  else  if (i == 1){
        document.write("<br>Score of " + students[1] + " is " + score[1] +" . Percentage is: " + score[1] / 500 * 100 + " % ");
    }
     else if (i == 2){
        document.write("<br>Score of " + students[2] + " is " + score[2] +" . Percentage is: " + score[2] / 500 * 100 + " % " );
    }

}
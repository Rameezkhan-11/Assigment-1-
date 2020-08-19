  var marksObtainedInThreeSubjects = (Number (prompt("Tell me marks obtained in three subjects")));
    var totalMarks = (Number (prompt("Tell me total marks")));
    var percentage = marksObtainedInThreeSubjects / totalMarks * 100;
    var per = percentage.toFixed(2);
   document.write("<h1> Mark Sheet</h1>");
    document.write(" <br> Total Marks: " + totalMarks );
    document.write(" <br> Marks obtained: " + marksObtainedInThreeSubjects  );
    document.write("<br> Percentage: " + per );
if (percentage >= 80){
    document.write("<br>  Grade: A1 <br> Remarks: Excellent ");
}
else if(percentage >= 70){
    document.write("<br> Grade: A <br> Remarks: Good</h2> <br>");
}
else if (percentage >= 60){
    document.write("<br> Grade: B <br> Remarks: You need to improve" );
}
else if ( percentage < 60){
    document.write(" <br> Grade: Fail <br> Remarks: Sorry ");
}
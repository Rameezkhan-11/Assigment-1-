var cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var choiceCities = ["th","st","nd","rd"];
 for(var i = 0; i < cities.length; i++){
  if (i === 0){
        document.write("<br> 1"+choiceCities[1] +" Choice is " + cities[0]);

  }  



else if(i === 1){
      document.write("<br> "+ 2 + choiceCities[2] +" Choice is "+ cities[1]);
}
else if (i === 2){
      document.write("<br> "+3 + choiceCities[3]+" Choice is "+ cities[2]);
}
else if (i === 3){
      document.write("<br> "+4 + choiceCities[0]+" Choice is " + cities[3]);
}
 }

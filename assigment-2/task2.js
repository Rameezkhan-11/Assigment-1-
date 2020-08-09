var userInputTrafficLights = prompt("Road Signal");
userInputTrafficLights = userInputTrafficLights.toLowerCase(); 
if (userInputTrafficLights === "red"){
    alert("Must Stop");
}
if(userInputTrafficLights === "yellow"){
    alert("Ready to move");
}
if(userInputTrafficLights === "green"){
    alert("Move on");
}
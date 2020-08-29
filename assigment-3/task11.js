var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to our bakery what do you want sir/m'aa'm???");
var userOrder = userInput.toLowerCase();
if(userOrder === bakeryItems[0]){
    document.write(bakeryItems[0] + " is availabe on index 0.")
}
else if (userOrder === bakeryItems[1]){
    document.write(bakeryItems[1] + " is available on index 1.")
}
else if (userOrder === bakeryItems[2]){
    document.write(bakeryItems[2] + " is available on index 2." )
}
else if (userOrder === bakeryItems[3]){
    document.write(bakeryItems[3] + " is available on index 3.")
}
else if (userOrder === bakeryItems[4]){
    document.write(bakeryItems[4] + " is available on index 4")
}
else if (userOrder != bakeryItems){
document.write(userOrder + " is not available")
}
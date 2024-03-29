// Creating a Guest list Array
var guestlist = ["Afshan", "Abeera", "Shareen", "Rohaan",];
//Making variable for those guest who cant come
var dontcome = guestlist[0];
//Print the name of guest who cant come
console.log(dontcome, "Nai askti hy");
//Add or Remove Values from Guest list Array
guestlist.splice(0, 1, "Zara");
//Message print for bigger table
console.log("Good News ! we have found a bigger table for dinner");
//Adding a new value at starting indes of array
guestlist.unshift("Alisha");
//Adding a new value at ending index of array
guestlist.push("Zoha");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestlist.length / 2);
//Adding a new guest to middle index of array
guestlist.splice(middleIndex, 0, "Ayra");
//Print message of updated list 
console.log("Updated List of of Our Guest");
//Sendin a invitation message to our guest one by one with their names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me?")); });

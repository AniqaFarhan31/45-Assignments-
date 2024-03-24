var guestList = ["Rohaan", "Shareen", "Abeera", "Afshan"];
var dontCome = guestList[0];
console.log(dontCome, "Mn nhi askta");
guestList.splice(0, 1, "Talha");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with me?")); });

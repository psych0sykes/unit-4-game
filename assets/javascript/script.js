window.onload = function () {

console.log("JS READY")

var isSelected;

var charList = [
    "char1",
    "char2",
    "char3"
]

console.log(charList)

var char1 = {
    "name" : "char1",
    "hp" : 40,
    "attack" : 3,
    "counter" : 6,
    "isSelected" : false,
    "isDead" : false,
}
var char2 = {
    "name" : "char2",
    "hp" : 35,
    "attack" : 5,
    "counter" : 10,
    "isSelected" : false,
    "isDead" : false,
}
var char3 = {
    "name" : "char3",
    "hp" : 30,
    "attack" : 7,
    "counter" : 14,
    "isSelected" : false,
    "isDead" : false,
}
var char4 = {
    "name" : "char3",
    "hp" : 25,
    "attack" : 9,
    "counter" : 18,
    "isSelected" : false,
    "isDead" : false,
}

console.log("char1: " + char1["hp"])
console.log(char1["isSelected"])

char1["isDead"] = true;
console.log(char1["isDead"])






};

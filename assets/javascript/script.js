window.onload = function () {

console.log("JS READY")


var char = [
    char0 = {
    },
    char1 = {
    },
    char2 = {
    },
    char3 = {
    }
];

function setChar () {
    char = [
        char0 = {
            "name" : "char0",
            "hp" : 40,
            "attack" : 3,
            "counter" : 6,
            "isSelected" : false,
            "isDead" : false,
        },
        char1 = {
            "name" : "char1",
            "hp" : 35,
            "attack" : 5,
            "counter" : 10,
            "isSelected" : false,
            "isDead" : false,
        },
        char2 = {
            "name" : "char2",
            "hp" : 30,
            "attack" : 7,
            "counter" : 14,
            "isSelected" : false,
            "isDead" : false,
        },
        char3 = {
            "name" : "char3",
            "hp" : 25,
            "attack" : 9,
            "counter" : 18,
            "isSelected" : false,
            "isDead" : false,
        }
    ];
}

console.log(char[0]["name"])

setChar()

console.log(char[0]["name"])

function selectChar (a) {
    char[a]["isSelected"] = true;
    console.log(char[a]["isSelected"])
}


function ifDead () {
    for (var i = 0; i < char.length; i++) {
        if (char[i]["isDead"]) {
            console.log(char[i]["name"] + " is DEAD")
        }
        else {
            console.log(char[i]["name"] + " is ALIVE")
        }
    }
}

ifDead ()


};

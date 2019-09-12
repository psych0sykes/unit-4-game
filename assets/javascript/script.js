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
var user;
var enemy;
var increase;

function setChar () {
    char = [
        char0 = {
            "name" : "char0",
            "hp" : 100,
            "attack" : 3,
            "counter" : 5,
            "isUser" : false,
            "isSelected" : false,
            "isDead" : false,
        },
        char1 = {
            "name" : "char1",
            "hp" : 90,
            "attack" : 5,
            "counter" : 7,
            "isUser" : false,
            "isSelected" : false,
            "isDead" : false,
        },
        char2 = {
            "name" : "char2",
            "hp" : 80,
            "attack" : 7,
            "counter" : 9,
            "isUser" : false,
            "isSelected" : false,
            "isDead" : false,
        },
        char3 = {
            "name" : "char3",
            "hp" : 70,
            "attack" : 9,
            "counter" : 11,
            "isUser" : false,
            "isSelected" : false,
            "isDead" : false,
        }
    ];
}

console.log(char[0]["name"])

setChar()

console.log(char[0]["name"])

function selectEnemy (a) {
    char[a]["isSelected"] = true;
    enemy = char[a]
    console.log(enemy)
}
function selectUser (a) {
    char[a]["isUser"] = true;
    user = char[a]
    increase = user["attack"]
    console.log(user)
}

selectUser(0)
selectEnemy(1)

// function ifDead () {
//     for (var i = 0; i < char.length; i++) {
//         if (char[i]["isDead"]) {
//             console.log(char[i]["name"] + " is DEAD")
//         }
//         else {
//             console.log(char[i]["name"] + " is ALIVE")
//         }
//     }
// }

function attack () {
    enemy["hp"] = enemy["hp"] - user["attack"];
    user["attack"] = user["attack"] + increase;
    user["hp"] = user["hp"] - enemy["counter"];
    console.log(user);
    console.log(enemy);
};

attack();


};

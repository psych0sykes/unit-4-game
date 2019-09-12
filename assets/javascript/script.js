window.onload = function () {

console.log("JS READY");


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
var user = {
    "isUser" : false,
};
var enemy = {
    "isEnemy" : false,
};
var increase;
var defeated;

function setChar () {
    char = [
        char0 = {
            "name" : "croissant",
            "hp" : 100,
            "attack" : 3,
            "counter" : 5,
            "isUser" : false,
            "isEnemy" : false,
            "isDead" : false,
            "img" : "assets/images/croissant.png"
        },
        char1 = {
            "name" : "cupcake",
            "hp" : 90,
            "attack" : 5,
            "counter" : 7,
            "isUser" : false,
            "isEnemy" : false,
            "isDead" : false,
            "img" : "assets/images/cupcake.png"
        },
        char2 = {
            "name" : "pie",
            "hp" : 80,
            "attack" : 7,
            "counter" : 9,
            "isUser" : false,
            "isEnemy" : false,
            "isDead" : false,
            "img" : "assets/images/pie.png"
        },
        char3 = {
            "name" : "cookie",
            "hp" : 70,
            "attack" : 9,
            "counter" : 11,
            "isUser" : false,
            "isEnemy" : false,
            "isDead" : false,
            "img" : "assets/images/cookie.png"
        }
    ];
    user = null;
    enemy = null;
    user = {
        "isUser" : false,
    };
    enemy = {
        "isEnemy" : false,
    };
};

function start () {
    setChar();


    for (var i = 0; i < char.length; i++) {
        var newDiv = $("<div>");
        newDiv.addClass("icon");
        newDiv.html("<img src ='" + char[i]["img"] + "'>");
        newDiv.attr("id",char[i]["name"])
        newDiv.attr("charNumber",[i])
        $("#charSelect").append(newDiv);
    }
    
};

console.log(char[0]["name"]);

setChar();

console.log(char[0]["name"]);

function selectEnemy (a) {
    char[a]["isEnemy"] = true;
    enemy = char[a];
    console.log(enemy);
}
function selectUser (a) {
    char[a]["isUser"] = true;
    user = char[a];
    increase = user["attack"];
    console.log(user);
}

function ifDead () {
    if (enemy["hp"] < 1) {
        enemy = null;
        enemy = {"isEnemy" : false}
        defeated++;
        $("#enemyDiv").empty();
        console.log("ifDead");
    }
    if (user["hp"] < 1) {
        alert("LOSER");
        start();
    }
    win();
}

function win () {
    if (defeated === 3) {
        alert("WINNER")
        start()
    }
}

function attack () {
    enemy["hp"] = enemy["hp"] - user["attack"];
    user["attack"] = user["attack"] + increase;
    user["hp"] = user["hp"] - enemy["counter"];
    console.log(user);
    console.log(enemy);
    ifDead();
};

start()

$(".icon").click(function () {

    if (user["isUser"] === false) {
        var a = $(this).attr("charNumber")
        selectUser(a)
        $("#userDiv").append(this);
    }
    else if (enemy["isEnemy"] === false) {
        var a = $(this).attr("charNumber")
        selectEnemy(a)
        $("#enemyDiv").append(this);
    }
});

$("#attackButton").click(attack)



};

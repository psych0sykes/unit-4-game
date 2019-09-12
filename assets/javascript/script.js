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
var increase = 0;
var defeated = 0;

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
            "hp" : 75,
            "attack" : 7,
            "counter" : 9,
            "isUser" : false,
            "isEnemy" : false,
            "isDead" : false,
            "img" : "assets/images/pie.png"
        },
        char3 = {
            "name" : "cookie",
            "hp" : 60,
            "attack" : 9,
            "counter" : 11,
            "isUser" : false,
            "isEnemy" : false,
            "isDead" : false,
            "img" : "assets/images/cookie.png"
        }
    ];
};

function start () {
    $("#userDiv").empty();
    $("#enemyDiv").empty();
    $("#charSelect").empty();
    
    setChar();
    increase = 0;
    defeated = 0;
    user = null;
    enemy = null;
    user = {
        "isUser" : false,
        "attack" : 0,
        "hp" : 0,
    };
    enemy = {
        "isEnemy" : false,
        "counter" : 0,
        "hp" : 0,
    };
    writeStats()

    for (var i = 0; i < char.length; i++) {
        var newDiv = $("<div>");
        newDiv.addClass("icon");
        newDiv.html("<img src ='" + char[i]["img"] + "'>");
        newDiv.attr("id",char[i]["name"])
        newDiv.attr("charNumber",[i])
        $("#charSelect").append(newDiv);
    }
    $(".icon").click(function selector() {
        console.log("click")
    
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
        writeStats()
    });

    $("#pickText").text("Choose your Fighter!")
};

function selectEnemy (a) {
    char[a]["isEnemy"] = true;
    enemy = char[a];
    $("#pickText").text("FIGHT!")
    console.log(enemy);
}
function selectUser (a) {
    char[a]["isUser"] = true;
    user = char[a];
    increase = user["attack"];
    $("#pickText").text("Choose your Opponent!")
    console.log(user);
}

function ifDead () {
    if (enemy["hp"] < 1) {
        enemy = null;
        enemy = {"isEnemy" : false}
        defeated++;
        $("#enemyDiv").empty();
        $("#enemyAttack").text(0);
        $("#enemyHealth").text(0);
        $("#pickText").text("Choose your Opponent!")
        console.log("DEAD");
        console.log(defeated);
    }
    if (user["hp"] < 1) {
        alert("LOSER");
        start();
    }
    win();
}

function win () {
    if (defeated === (char.length - 1)) {
        alert("WINNER")
        start()
    }
}
function writeStats () {
    $("#userAttack").text(user["attack"]);
    $("#userHealth").text(user["hp"]);
    $("#enemyAttack").text(enemy["counter"]);
    $("#enemyHealth").text(enemy["hp"]);
}

function attack () {
    if (enemy["isEnemy"] === true){
    enemy["hp"] = enemy["hp"] - user["attack"];
    user["attack"] = user["attack"] + increase;
    user["hp"] = user["hp"] - enemy["counter"];
    writeStats()
    console.log(user);
    console.log(enemy);
    ifDead();
    };
};

start();

$("#attackButton").click(attack)



};

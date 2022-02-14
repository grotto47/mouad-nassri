
let gameHeight = $(window).innerHeight() - 55;
$("#video-game-display ").css("height", gameHeight);

$("#pvg-with-text").click(function() {
    $("#video-game-display").css("display","block");
    $("#video-game-display").animate({opacity:"1"}, 400);
    return false;
})

// Set canvas dimensions
let canvasWidth = $("#game-canvas").width();
let canvasHeight = canvasWidth / 5;
$("#game-canvas").css("height", canvasHeight);

let canvas = document.getElementById("game-canvas"),
    context = canvas.getContext("2d");

let background = document.getElementById("game-bk");
context.drawImage(background, 0, 0, canvasWidth, canvasHeight-10);

// This is step that the player will use to walk. (default is easy = 6)
let step = 6;

var obj = {
    x: 10,
    y: 192,
    w: 24,
    h: 24
};

// draw the scene
var draw = function (ctx, obj) {
    // draw the object
    ctx.fillStyle = 'white';
    ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
    ctx.fill();
};

draw(context, obj);

// start loop

/*left = 37
up = 38
right = 39
down = 40*/

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}



$(document).keydown(function(e) {
    // Here we need to fihure out some way to see if the player collide with the border, if so print a message 'you lose !'
    // If the player hit the green area print 'You win'

    if(e.keyCode == 38) {
        var x = obj.x;
        var y = obj.y-2;
        var p = context.getImageData(x, y, 1, 1).data; 
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

        if(hex != "#000000") {
            if(hex=="#ffffff") {
                lose();
            } else {
                win();
            }
        }

        context.clearRect(obj.x, obj.y, obj.w, obj.h);
        obj.y -= step;
        // draw object
        draw(context, obj);
    } else if(e.keyCode == 40) {
        // First disable down arrow from slide down
        e.preventDefault();
        
        var x = obj.x;
        var y = obj.y+2;
        var coord = "x=" + x + ", y=" + y;
        var p = context.getImageData(x+23, y+23, 1, 1).data; 
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

        if(hex != "#000000") {
            if(hex=="#ffffff") {
                lose();
            } else {
                win();
            }
        }

        context.clearRect(obj.x, obj.y, obj.w, obj.h);
        obj.y += step;
        // draw object
        draw(context, obj);
    } else if(e.keyCode == 39) {
        var x = obj.x+24;
        var y = obj.y;
        var p = context.getImageData(x, y, 1, 1).data; 
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

        if(hex != "#000000") {
            if(hex=="#ffffff") {
                lose();
            } else {
                win();
            }
        }

        context.clearRect(obj.x, obj.y, obj.w, obj.h);
        obj.x += step;
        // draw object
        draw(context, obj);
    } else if(e.keyCode == 37) {
        var x = obj.x-1;
        var y = obj.y;
        var p = context.getImageData(x, y, 1, 1).data; 
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

        if(hex != "#000000") {
            if(hex=="#ffffff") {
                lose();
            } else {
                win();
            }
        }
        context.clearRect(obj.x, obj.y, obj.w, obj.h);
        obj.x -= step;
        // draw object
        draw(context, obj);
    }
});

$("#menu-btn").click(function() {
    $(".menu-container").animate({opacity:"1"}, 400);
    resetScene();
    clearInterval(interval);
    $("time-counter").text("--:--");
})

$(".stop-button").click(function() {
    if($(this).text() == "PAUSE") {
        if($("#time-counter").text() != "--:--") {
            $(this).text("CONTINUE");
            clearInterval(interval);
            $(".menu-container").animate({opacity:"1"}, 200);
        }
    } else {
        $(".menu-container").animate({opacity:"0"}, 200);
        $(this).text("PAUSE");
        if($("#time-counter").text() != "--:--")
            count_down();
    }

})

// Start the game
$("#start-game").click(function() {
    // Check level
    if($("#easy").is(":checked")) {
        $("#time-counter").text("01:20");
        count_down();
    } else if($("#medium").is(":checked")) {
        $("#time-counter").text("01:00");
        count_down();
    } else if($("#hard").is(":checked")) {
        $("#time-counter").text("00:40");
        count_down();
    }

    resetScene();

    $(".menu-container").animate({opacity:"0"}, 400);
})

function resetScene() {
    let background = document.getElementById("game-bk");
    context.clearRect(obj.x, obj.y, obj.w, obj.h);
    context.drawImage(background, 0, 0, canvasWidth, canvasHeight-10);
    obj.x = 10; 
    obj.y = 192;
    draw(context, obj);
    $("#time-counter").text("--:--");
}

// counting-down function
let interval = null;

function count_down() {
    let current = $("#time-counter").text();
    current = current.split(":");

    current = parseInt(current[0]*60) + parseInt(current[1]);

    interval = setInterval(function() {
        if(current == 1) {
            lose();
        }
        current = current - 1;
        let min = Math.floor(current / 60);
        let sec = current % 60
        
        $("#time-counter").text("0"+min + ":" + sec);
    }, 1000);
}

function lose() {
    clearInterval(interval);
    $("#time-counter").text("--:--");
    $(".menu-container").css("opacity","1");
    $("#res-message").text("YOU LOSE :( TRY AGAIN");
}

function win() {
    clearInterval(interval);
    $("#win-container").css("display","flex");
    $("#win-container").css("opacity","1");
}

$("#exit-game").click(function() {
    $("#video-game-display").animate({opacity:"0"}, 400);
    $("#video-game-display").css("display","none");
    return false;
})

$(".exit-button").click(function() {
    $("#video-game-display").animate({opacity:"0"}, 400);
    $("#video-game-display").css("display","none");
    return false;
})

$("#go-back-to-menu").click(function() {
    resetScene();
    $("#res-message").text("YOU WIN");
    $("#win-container").css("display","none");
    $("#win-container").css("opacity","0");
    $(".menu-container").animate({opacity:"1"}, 200);

    return false;
})

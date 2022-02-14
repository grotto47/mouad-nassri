$(".inp").focus(function(event) {
    $(".input-strip").animate({
        width: "0%"
    }, 100);
    $(this).parent().find(".input-strip").animate({
        width: "100%"
    }, 200);

    event.stopPropagation();
});

$(".inp").blur(function() {
    $(this).parent().find(".input-strip").animate({
        width: "0%"
    }, 200);
})

$("#mymap").height($("#mymap").height() + 16);

let c = 0;
$(".resize-button").click(function() {
    if(c == 0) {
        $("#terminal-container").animate({
            width: "90%"
        }, 400)
        if($(window).width() > 600) {
            $("#terminal-container").animate({
                height: "95%"
            }, 400);
        }
        c++;
    } else {
        $("#terminal-container").animate({
            width: "80%"
        }, 400)
        if($(window).width() > 600) {
            $("#terminal-container").animate({
                height: "100%"
            }, 400);
        }
        c = 0;
    }
});

$(".exit-button").click(function() {
    $("#black-back").animate({
        opacity: 0
    }, 400, function() {
        $("#black-back").remove();
    });

    $("#terminal-wrapper").animate({
        opacity: 0
    }, 400, function() {
        $("#terminal-wrapper").remove();
    });

    $("#terminal-caller").animate({
        opacity: 0
    }, 400, function() {
        $("#terminal-caller").remove();
    });
})

function adjust_map() {
    $("#mymap").height($(window).height() + 16);
}

// Adjust map whenever document is resized here
window.addEventListener('resize', adjust_map);

if($(window).width() < 600) {
    $("#map-wrapper").height($("#map-wrapper").width());
    $("#mymap").height($("#mymap").width()+40);
}

if($(window).width() > 600 && $(window).width() < 900) {
    $("#map-wrapper").height($("#first-section").height());
}

$('#send').click(function(){
    
});

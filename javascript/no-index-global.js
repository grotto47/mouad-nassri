$(".resize-button").click(function() {
    let width = $(window).width();
    let height = $(window).height();

    if($(window).width() > 900) {
        if($("#terminal-wrapper").width() == width-20) {
            $("#terminal-wrapper").animate({
                left: "-30px",
                width: "100%",
            }, 600, function() {
                $("#terminal-wrapper").animate({
                    height: "100%",
        
                }, 600);
            });    
        } else {
            $("#terminal-wrapper").animate({
                left: "-170px",
                width: width-20,
            }, 600, function() {
                $("#terminal-wrapper").animate({
                    height: height-20,
                }, 600);
            });
        }
    } else {
        if($("#terminal-container").width() == width-60) {
            $("#terminal-container").animate({
                width: "90%",
            }, 600);    
        } else {
            $("#terminal-container").animate({
                width: width-60
            }, 600);
        }
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

$("#black-back").click(function(event) {
    event.stopPropagation();
})
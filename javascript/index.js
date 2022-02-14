let c = 0;
$(".resize-button").click(function() {
    if(c == 0) {
        $("#terminal-container").animate({
            width: "100%"
        }, 400)
        c++;
    } else {
        if($(window).width() > 900) {
            $("#terminal-container").animate({
                width: "80%"
            }, 400)
        } else {
            $("#terminal-container").animate({
                width: "90%"
            }, 400)
        }
        c = 0;
    }
});

active_terminal();
if($(window).width() > 900) {
    $("#terminal-input-helper").focus();
}

// Global Scope variable we need this
var clickCount = 0;
// Our Timeout, modify it if you need
var to = 500;
// Copy this function and it should work
$("#terminal-header").click(function() {
    clickCount++;
    if (clickCount == 1) {
      setTimeout(function(){
        if(clickCount == 1) {
          
        } else {
            if(c == 0) {
                $("#terminal-container").animate({
                    width: "100%"
                }, 400)
                c++;
            } else {
                if($(window).width() > 900) {
                    $("#terminal-container").animate({
                        width: "80%"
                    }, 400)
                } else {
                    $("#terminal-container").animate({
                        width: "90%"
                    }, 400)
                }
                c = 0;
            }
        }
        clickCount = 0;
      }, to || 300);
    }
})
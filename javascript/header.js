$(".menu-button-container").on({
    mouseenter: function() {
        $(this).find(".menu-button-image").animate({
            opacity: 0
        }, 400);
        $(this).find(".menu-button-text").css("display", "flex");
        $(this).find(".menu-button-text").animate({
            opacity: 1
        }, 400);
    },
    mouseleave: function() {
        $(this).find(".menu-button-image").animate({
            opacity: 1
        }, 400);
        $(this).find(".menu-button-text").animate({
            opacity: 0
        }, 200);
    },
    click: function() {
        console.log("clicked !");
    }
});

$("#expand-logo").click(function() {
    
    if($("#first-logo-text-container").css("width") != "262px") {

        $(".logo-container").animate({
            width: "300px"
        }, 400);

        $(".logo-container").css("width", "300px");
        $("#first-logo-text-container").css("width", "262px");
        $("#expand-logo").css("backgroundImage", 'url("assets/images/icons/less-than.png")');
        $("#second-logo-text-container").animate({
            width: "312px"
        }, 400, function() {
            $(".logo-text2").animate({
                marginLeft: "+16px",
                height: '20px'
            }, 400);
        })


    }else {
        $("#expand-logo").css("backgroundImage", 'url("assets/images/icons/greather-than.png")');
        $(".logo-container").animate({
            width: "60px"
        }, 400, function() {
            $("#first-logo-text-container").css("width", "22px");
            $("#first-logo-text-container").css("overflow", "hidden");
        });

        $("#second-logo-text-container").animate({
            width: "50px"
        }, 400, function() {
            $(".logo-text2").animate({
                marginLeft: "-50px",
                height: '15px'
            }, 400);
        })
    }
})

let menu_button_image = $(".menu-button-selected").find(".menu-button-image");
let old_class = menu_button_image.parent().find(".uncolored-image-class").val();
let new_class = menu_button_image.parent().find(".colored-image-class").val();

console.log(menu_button_image + ", " + old_class + ", " + new_class);

menu_button_image.removeClass(old_class);
menu_button_image.addClass(new_class);

$("#show-menu").click(function() {
    if($("#expand-logo").css("display") == "none") {
        $("#expand-logo").animate({
            opacity: 1
        }, 600, function() {
            $("#expand-logo").css("display", "block");
        });

        $("header").animate({
            marginLeft: "0"
        }, 600);
        $("#expand-logo").css("display", "block");
    } else {
        $("header").animate({
            marginLeft: "-60px"
        }, 600, function() {
            $("#expand-logo").animate({
                opacity: 0
            }, 600, function() {
                $("#expand-logo").css("display", "none");
            });
        });
    }
})

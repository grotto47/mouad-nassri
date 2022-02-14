
let num_of_projects = $(".project").length;
let current = $("#current-project").val();
$(".project").eq(0).css("display", "block");

$(".next").click(function() {
    if(++current == num_of_projects) {
        current = 0;
    }
    $(".project").css("display", "none");
    $(".project").eq(current).css("display", "block");
});

$(".prev").click(function() {
    if(--current == -1) {
        current = num_of_projects-1;
    }
    $(".project").css("display", "none");
    $(".project").eq(current).css("display", "block");
});

$(".preview-chat").click(function() {
    $("#project-preview").css("display", "flex");
    $("#project-preview").animate({
        opacity: 1
    }, 600);

    $('#project-preview-frame').attr('src', 'https://www.youtube.com/embed/uKFAwfnZOg8?origin=https://mouad-dev.com');

    return false;
});

$("#close-preview").click(function(){
    $("#project-preview").animate({
        opacity: 0
    }, 600, function() {
        $('#project-preview-frame').each(function(index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
          });
        $("#project-preview").css("display", "none");
        console.log("work !");
    });
});
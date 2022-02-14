$("#auto-animated-button").click(function() {
    let animated_state = $(this).find(".auto-animated").val();
    if(animated_state == 1) {
        $(this).find(".auto-animated").val("0");
        $(this).find("#auto-annimation-state-image").attr("src", "assets/images/icons/off.png");
    } else {
        $(this).find(".auto-animated").val("1");
        $(this).find("#auto-annimation-state-image").attr("src", "assets/images/icons/on.png");
    }

    return false;
});

function adjust_scrollable_section() {
    let scrollable_section_height = $("#terminal-without-header").height() - ($("#author-container").height() + $("#titles-box").height())
    $("#scrollable-terminal-section").height(scrollable_section_height - 44);
    $("#scroll").height($("#content-wrapper").height() - 24)
}
adjust_scrollable_section();

function adjust_global_container() {
    if($(window).width() > 900) {
        $("#global-section").height("100%");
        $("#terminal-container").height("100%");
    } else {
        $("#terminal-container").height("60%");
    }
}
adjust_global_container();

window.addEventListener('resize', adjust_scrollable_section);
window.addEventListener('resize', adjust_global_container);

const interval = setInterval(function() {
    if($("#cursor").css("opacity") == "0") {
        $("#cursor").css("opacity", "1");
    } else {
        $("#cursor").css("opacity", "0");
    }
}, 500);

const annimated_help_button = setInterval(function() {
    $("#terminal-help-button").animate({
        opacity: 0
    }, 1000, function() {
        $("#terminal-help-button").animate({
            opacity: 1
        }, 600);
    })
}, 2000);

$("body").click(function() {
    $("#terminal-input-helper").blur();
    $("#terminal-container").css("opacity", "0.8");
    $("#black-back").animate({
        opacity: 0
    }, 400, function() {
        $("#black-back").css("display", "none");
    });
})

active_terminal();
$("#terminal-container").click(function(event) {
    active_terminal();
    $("#terminal-input-helper").focus();

    event.stopPropagation();
    return false;
});

function active_terminal() {
    $("#terminal-container").css("opacity", "1");
}

$("#terminal-input-helper").on({
    input: function(event) {
        $(".terminal-command").last().text($(this).val());
    },
    keyup: function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            // Run function depend on the command
            let command = $(".terminal-command").last().text();
            run_command(command);
            $("#terminal-input-helper").val("");
            if($("#terminal-content").height() > $("#scrollable-terminal-section").height() - 20) {
                //$("#scroll").css("display", "block");
                $("#terminal-content").css("bottom", "26px")
            } else {
                $("#scroll").css("display", "none");
            }
            return;
        }
    }
});

function run_command(command) {
    // First we convert directive to lowercase and remove spaces in front and tail
    command = command.toLowerCase();
    command = command.trim();

    // Get the command as well as parameters
    let com = command.split(" ");
    let params = [];
    let k = 0;

    for(let i = 1;i<com.length;i++) {
        params[k] = com[i];
        k++;
    }

    // Build a comand object containing command and parameters
    let command_obj = {
        command: com[0],
        params: params
    }

    switch(command_obj.command) {
        case "help":
            console.log(command_obj.params[0]);
            let content = "";
            if(command_obj.params.length == 0) {
                content = `
                    <div class="command-result-container">
                        <span class="command-name">cd</span>: navigate through the website<br>
                        <span style="margin-left: 20px">=> ex: cd portfolio<br></span>
                        <span class="command-name">help</span>: get a short list of the most often used commands.<br>
                        <span class="command-name">clear</span>: clear the terminal.<br>
                        <span class="command-name">exit</span>: close the terminal window.<br>
                    </div>
                `;
            } else if(command_obj.params[0] == '-all') {
                content = `
                    <div class="command-result-container">
                        <span class="command-name">cd</span>: navigate through the website<br>
                        <span style="margin-left: 20px">=> ex: cd portfolio<br></span>
                        <span class="command-name">ls</span>: list all web pages you can reach from terminal.<br>
                        <span class="command-name">help</span>: get a short list of the most often used commands.<br>
                        <span class="command-name">pwd</span>: get the current working web page.<br>
                        <span class="command-name">clear</span>: clear the terminal.<br>
                        <span class="command-name">exit</span>: close the terminal window.<br>
                    </div>
                `;
            } else {
                let param = command_obj.params[0];
                param = param.substring(1, param.length);
                print_content_to_terminal("'<span class='not-found-command'>" + param + "</span>'" + ": help parameter not found");
                break;
            }

            print_content_to_terminal(content);
            break;
        case "":
            break;
        case "cd":
            if(command_obj.params.length == 0) {
                print_content_to_terminal("'<span class='not-found-command'>Missing path</span>'" + ": you should provide the path to cd command. (ex: cd skills)");
            } else {
                reach(command_obj.params[0]);
            }
            break;
        case 'pwd':
            let current_page = $("h1").text().toLowerCase();
            if(current_page == "about me") {
                current_page = "About";
            } else if(current_page == "mouad nassri") {
                current_page = "Home";
            }
            print_content_to_terminal("You are in <span class='special-word'>" + current_page + "</span> page.");
            break;
        case 'clear':
            $("#terminal-content").html("");
            $("#terminal-content").html(`
                <span class="command-starter unselectable">~ </span>
                <span class="terminal-command"></span>
                <span id="cursor"></span>
                <span class="terminal-result"></span>
            `)

            $("#terminal-content").css("bottom", "");
            break;
        case 'ls':
            let ls = `
                <div class="command-result-container">
                    <span class="command-name">home</span>: Home page.<br>
                    <span class="command-name">about</span>: About me page.<br>
                    <span class="command-name">skills</span>: My skillset page.<br>
                    <span class="command-name">portfolio</span>: My works and activities.<br>
                    <span class="command-name">contact</span>: Contact page.<br>
                </div>
            `;
            print_content_to_terminal(ls);
            break;
        case 'exit':
            if($("h1").text() == "Mouad Nassri") {
                print_content_to_terminal("<span class='not-found-command'>ERROR</span>" + ": exit command is not allowed here !");
                break;
            }

            $("#terminal-content").html("");
            $("#terminal-content").html(`
                <span class="command-starter unselectable">~ </span>
                <span class="terminal-command"></span>
                <span id="cursor"></span>
                <span class="terminal-result"></span>
            `);

            $("#terminal-wrapper").animate({
                opacity: 0
            }, 400, function() {
                $("#terminal-wrapper").css("display", "none");
            });

            $("#black-back").animate({
                opacity: 0
            }, 400, function() {
                $("#black-back").css("display", "none");
            });

            break;
        default:
            print_content_to_terminal("'<span class='not-found-command'>" + command_obj.command + "</span>'" + ": command not found");
    }
}

let paths = [
    "home",
    "about",
    "skills",
    "portfolio",
    "contact",
]

function reach(path) {
    let found = false;

    for(let i = 0;i<paths.length;i++) {
        if(path == paths[i]) {
            found = true;
            break;
        }
    }

    if(found) {
        $("#terminal-input-helper").blur();
        $("#cursor").remove();
        // Display result if the operation is just printing
        $(".terminal-result").last().append("Reaching location ..");

        if(path == "home") {
            path = "index";
        }
        setTimeout(function() {
            window.location = path;
        }, 600);
    } else {
        print_content_to_terminal("'<span class='not-found-command'>" + path + "</span>'" + ": location not found");
    }
}

function print_content_to_terminal(content) {
    // Remove cursor
    $("#cursor").remove();
    // Display result if the operation is just printing
    $(".terminal-result").last().append(content);
    // Then we add line starter as well as the cursor
    $("#terminal-content").last().append("<span class='command-starter unselectable'>~ </span>");
    $("#terminal-content").last().append("<span class='terminal-command'></span>");
    $("#terminal-content").last().append("<span id='cursor'></span>");
    $("#terminal-content").last().append("<span class='terminal-result'></span>");
}

let commands = [
    "help",
    "clear",
    "cd",
    "pwd",
    "ls"
]

let help_hints = [
    "Run help command to get a short list of the most often used commands.",
    "If you want a list of all supported commands type help -all."
];

let hint_is_running = false;
let hint_dislay_completed = true;

async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
}

$("#terminal-help-button").click(function() {
    clearInterval(annimated_help_button);
    let i = 0;
    if(hint_is_running) {
        console.log("I'm here now blocked !");
        return;
    }
    hint_is_running = true;

    let display = setInterval(function(){
        if(i == help_hints.length) {
            hint_is_running = false;
            hint_dislay_completed = true;
            clearInterval(display);
            return;
        }

        if(hint_dislay_completed) {
            display_hint(help_hints[i]);
            i++;
        }
    }, 20);
});

function display_hint(hint) {
    hint_dislay_completed = false;
    if(!hint) {
        return;
    }
    let i = 0;
    let display_hint = setInterval(function(){
        if(i == hint.length) {
            let run = async ()=>{
                clearInterval(display_hint);
                await delay(4000);
                remove_hint();
            }
            run();
        }
        $("#terminal-help-hint").append(hint[i]);
        i++;
    }, 40);
}

function remove_hint() {
    let hint = $("#terminal-help-hint");
    let length = hint.text().length;
    let i = 1;
    
    let remove = setInterval(function() {
        if(i == length) {
            hint_is_running = false;
            clearInterval(remove);
            hint_dislay_completed = true;
        }
        let r_text = hint.text().substring(0, length-i);
        hint.text(r_text);
        i++;
    }, 10);
}

$("#scroll-bottom").on({
    mousedown: function() {
        let top = $("#content-wrapper").position().top;
        top -= 2;
        $("#content-wrapper").css("top", top);
    }
});

$("#terminal-caller").click(function() {
    call_terminal();
    $("#terminal-input-helper").focus();

    return false;
});

function call_terminal() {
    $("#black-back").css("display", "block");
    $("#terminal-wrapper").css("display", "block");
    $("#terminal-wrapper").animate({
        opacity: 1
    }, 600);
    $("#black-back").animate({
        opacity: 1
    }, 600);
    adjust_scrollable_section();
    active_terminal();
}

$(".hide-button").click(function() {
    $("#terminal-wrapper").animate({
        opacity: 0,
    }, 400, function() {
        $("#terminal-wrapper").css("display", "none");
    });

    $("#black-back").animate({
        opacity: 0
    }, 400, function() {
        $("#black-back").css("display", "none");
    });

    return false;
})

$("#terminal-caller").on({
    mouseenter: function() {
        $(this).animate({
            opacity: 1
        }, 200);
    },
    mouseleave: function() {
        $(this).animate({
            opacity: 0.4
        }, 200);
    }
})

$(".open-terminal").click(function() {
    call_terminal();

    return false;
})
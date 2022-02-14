
$(".go-to-skills").click(function() {
    call_terminal();

    // Prevent user from typing while command is displayed and run
    $("#terminal-input-helper").on({
        keydown: function() {
            return false;
        }
    })

    let input_helper = document.getElementById("terminal-input-helper");
    let i = 0;
    let emptying = setInterval(function() {
        if(input_helper.value == "") {
            let command = "cd skills";
            let run_c_anim = setInterval(function() {
                if(i == command.length) {
                    clearInterval(run_c_anim);
                    // Run command
                    run_command(command);
                    return;
                }
                console.log("hey");
                input_helper.value += command[i];
                input_helper.dispatchEvent(new Event("input"))
                i++;
            }, 200);

            clearInterval(emptying);
        }
        console.log("hey");
        input_helper.value = input_helper.value.substring(0, input_helper.value.length-1);
        input_helper.dispatchEvent(new Event("input"))
    }, 200);

    return false;
})
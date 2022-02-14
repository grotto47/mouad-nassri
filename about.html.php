<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My name is Mouad Nassri, and this is about page where you can know more about me."/>
    <title>About | Mouad Nassri</title>
    <link rel="icon" href="assets/images/icons/favicon.ico">
    <link rel="stylesheet" href="styles/global.css">
    <link rel="stylesheet" href="styles/terminal.css">
    <link rel="stylesheet" href="styles/no-index.css">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/about.css">

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="javascript/header.js" defer></script>
    <script src="javascript/terminal.js" defer></script>
    <script src="javascript/no-index-global.js" defer></script>
    <script src="javascript/about.js" defer></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-88668678-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-88668678-1');
    </script>
</head>
<body>
    <div id="black-back">

    </div>
    <?php
        $about_selected = "menu-button-selected";
        require_once "components/header.php";
    ?>
    <div id="global-section" class="relative">
        <div id="terminal-wrapper">
            <?php require "components/terminal.php" ?>
        </div>
        <h1 id="page-title" class="unselectable">About me</h1>
        <p id="page-quote">If you're <span class="bold"><em>wondering</em></span> who I am ..</p>

        <div class="description">
            I was never the best at school or academics, I’m just a super curious guy. 
             My <a href="https://www.youtube.com/channel/UCsmtbO_dUfDyRLti7AOIxmQ/featured" target="_blank" class="link">channel</a> exists to share these ideas and theories that interest me. 
        </div>
        <div class="description">
            I spend a lot of time building software and solve problems of all kinds, but there’s also a lot more to it.
            I’ve been working on a chat application to document the logic, reasoning, and problems encountered during the process of learning web developement.
            A combination of innovation and storytelling.
            I have many interests besides technology that I may share in a similar approach. You can read more about my technology stack on the <a href="" class="go-to-skills link">skills page</a>.
        </div>
        <div class="description">
            I like to write clean code with a strict style and full documentation.Also, as I am interested I am always seeking for new ways to write efficient code.
        </div>
    </div>
    <div id="terminal-caller">
        <div id="terminal-caller-header">
            <div class="move-to-right flex" style="margin-right: 4px">
                <div class="tch-button yellow-button"></div>
                <div class="tch-button green-button"></div>
                <div class="tch-button red-button"></div>
            </div>
        </div>
        <div class="hv-center" style="height: 100%">
            <div class="tch-terminal">💻</div>
        </div>
    </div>
</body>
</html>
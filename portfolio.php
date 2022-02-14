<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My name is Mouad Nassri, and this is portfolio page where you can find all my works and projects."/>
    <title>Mouad Nassri | Portfolio</title>
    <link rel="icon" href="assets/images/icons/favicon.ico">
    <link rel="stylesheet" href="styles/global.css">
    <link rel="stylesheet" href="styles/terminal.css">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/no-index.css">
    <link rel="stylesheet" href="styles/portfolio.css">

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="javascript/header.js" defer></script>
    <script src="javascript/no-index-global.js" defer></script>
    <script src="javascript/terminal.js" defer></script>
    <script src="javascript/portfolio.js" defer></script>
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
    <div id="project-preview">
        <div id="close-preview"></div>
        <iframe id="project-preview-frame" type="text/html"
  src=""
  frameborder="0"></iframe>

    </div>
    <?php
        $portfolio_selected = "menu-button-selected";
        require_once "components/header.php";
    ?>
        <div id="global-section" class="relative">
        <div id="terminal-wrapper">
            <?php require "components/terminal.php" ?>
        </div>
        <h1 id="page-title" class="unselectable">Portfolio</h1>
        <p id="page-quote">Check <span class="bold"><em>what</em></span> I've been doing lately</p>

        <div>
            <input type="hidden" id="current-project" value="0">
            <div class="project-container">
                <div class="prev"></div>
                <div class="next"></div>
                <div class="project">
                    <h2 class="project-name">Portfolio</h2>
                    <div class="proj_cont">
                        <div class="project-image-container">
                            <img src="assets/images/projects/portfolio.png" class="project-image" alt="Portfolio project screenshot">
                        </div>
                        <div class="description">
                            This very website you're now watching. I wanted something fast and with good SEO for my portfolio, 
                            and there are a lot of static website generators but I decided to create it from scratch. 
                            It came with an amazing <span class="special-word open-terminal">terminal</span> that allows you surf the website using commands.
                            <h2 class="margin-bottom6">Technologies used: </h2>
                            <div class="flex">
                                <img src="assets/images/technologies/html.png" class="tech-img" alt="HTML">
                                <img src="assets/images/technologies/css.png" class="tech-img" alt="CSS">
                                <img src="assets/images/technologies/js.png" class="tech-img" alt="JAVASCRIPT">
                                <img src="assets/images/technologies/jquery.png" class="tech-img" alt="JQUERY">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project">
                    <h2 class="project-name">Real-time Chat Application</h2>
                    <div class="proj_cont">
                        <div class="project-image-container relative">
                            <div class="preview-container">
                                <a href="" class="button-style-1 preview-chat">PREVIEW</a>
                            </div>
                            <img src="assets/images/projects/chat.png" class="project-image" alt="">
                        </div>
                        <div class="description">
                            This is a real-time chat application written in pure PHP/Mysql. It contains a lot of features like exchanging messages asynchronously, realtime notifiers,
                             and also allow the user to add friends and follow them, share postst in different types (textual, post with images or videos .. etc) and write comments and like posts and sharing ..
                            This application use AJAX to handle actions, and long polling methodology to create a real-time channel between users and server.
                            If you want to see more about this project, click <a href="https://www.youtube.com/watch?v=uKFAwfnZOg8" target="_blank" class="link">here</a>, or on preview on the bottom right corner.
                            <h2 class="margin-bottom6">Technologies used: </h2>
                            <div class="flex">
                                <img src="assets/images/technologies/html.png" class="tech-img" alt="HTML">
                                <img src="assets/images/technologies/css.png" class="tech-img" alt="CSS">
                                <img src="assets/images/technologies/js.png" class="tech-img" alt="JAVASCRIPT">
                                <img src="assets/images/technologies/jquery.png" class="tech-img" alt="jQUERY">
                                <img src="assets/images/technologies/php.png" class="tech-img" alt="PHP">
                                <img src="assets/images/technologies/mysql.png" class="tech-img" alt="MYSQL">
                                <img src="assets/images/technologies/api.png" class="tech-img" alt="API">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
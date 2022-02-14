<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouad Nassri | Fullstack Developer</title>
    <meta name="description" content="My name is Mouad Nassri, a fullstack web developer. I spend a lot of time building software and solve problems of all kinds and always learn new technologies."/>
    <link rel="icon" href="assets/images/icons/favicon.ico">
    <link rel="stylesheet" href="styles/global.css?v=1.0">
    <link rel="stylesheet" href="styles/index.css?v=1.0">
    <link rel="stylesheet" href="styles/header.css?v=1.0">
    <link rel="stylesheet" href="styles/terminal.css?v=1.0">

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="javascript/config.js?v=1.0" defer></script>
    <script src="javascript/header.js?v=1.0" defer></script>
    <script src="javascript/terminal.js?v=1.0" defer></script>
    <script src="javascript/index.js?v=1.0" defer></script>
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
    <?php
        $home_selected = "menu-button-selected";
        require_once "components/header.php";
    ?>
    <section id="global-section" class="index-container">
        <h1 class="no-display">Mouad Nassri, Fullstack developer</h1>
        <div id="terminal-help-container">
            <div style="margin-right: 8px;">
                <img src="assets/images/icons/help.png" class="help-image" alt="Hint icon">
            </div>
            <div>
                <p class="terminal-help-paragraph">Now you can access the whole website through the following terminal.</p>
                <p class="terminal-help-paragraph">To use the terminal disable the auto-animated button in the top right corner.</p>
            </div>
        </div>
        <?php require_once "components/terminal.php"; ?>
        <p class="after-terminal-paragraph">“Have you ever heard the wonderful silence just before the dawn? Or the quiet and calm just as a storm ends? Or perhaps you know the silence when you haven't the answer to a question you've been asked, or the hush of a country road at night, or the expectant pause of a room full of people when someone is just about to speak, or, most beautiful of all, the moment after the door closes and you're alone in the whole house? Each one is different, you know, and all very beautiful if you listen carefully.”</p>
    </section>
</body>
</html>
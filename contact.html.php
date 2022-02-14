<?php
    $passed = false;
    $name = '';
    if(isset($_POST['send'])) {
        $error = '';

        $name = trim(htmlspecialchars($_POST['name']));
        $email = trim(htmlspecialchars($_POST['email']));
        $subject = trim(htmlspecialchars($_POST['subject']));
        $content = trim(htmlspecialchars($_POST['content']));
        $date = date('Y-m-d H:i:s');
        
        $dt = new DateTime();
        $timeZone = $dt->getTimezone()->getName();

        if(strlen($name) > 40 || strlen($name) < 2) {

        } else if(strlen($email) > 400 || strlen($email) < 2) {

        } else if(strlen($subject) > 400 || strlen($subject) < 2) {

        } else if(strlen($content) > 400 || strlen($content) < 2) {
            
        } else {
            // Everything's good !
            $passed = true;

            $uid = uniqidReal(10);

            $file = fopen('emails/'.$uid.".txt", "w");

            fwrite($file, 'name:'.$name.PHP_EOL);
            fwrite($file, 'email:'.$email.PHP_EOL);
            fwrite($file, 'subject:'.$subject.PHP_EOL);
            fwrite($file, 'content:'.$content.PHP_EOL);
            fwrite($file, 'date:'.$date.PHP_EOL);
            fwrite($file, 'timezone:'.$timeZone.PHP_EOL);
            fclose($file);
        }
    }

    function uniqidReal($lenght = 13) {
        // uniqid gives 13 chars, but you could adjust it to your needs.
        if (function_exists("random_bytes")) {
            $bytes = random_bytes(ceil($lenght / 2));
        } elseif (function_exists("openssl_random_pseudo_bytes")) {
            $bytes = openssl_random_pseudo_bytes(ceil($lenght / 2));
        } else {
            throw new Exception("no cryptographically secure random function available");
        }
        return substr(bin2hex($bytes), 0, $lenght);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My name is Mouad Nassri, and this is the contact page where you can send me a message and I'll respond to your message as soon as I can."/>
    <title>Mouad Nassri | Contact</title>
    <link rel="icon" href="assets/images/icons/favicon.ico">
    <link rel="stylesheet" href="styles/global.css">
    <link rel="stylesheet" href="styles/terminal.css">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/no-index.css">
    <link rel="stylesheet" href="styles/contact.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

    <script src="javascript/config.js" defer></script>
    <script src="javascript/header.js" defer></script>
    <script src="javascript/terminal.js" defer></script>
    <script src="javascript/contact.js" defer></script>
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
        $contact_selected = "menu-button-selected";
        require_once "components/header.php";
    ?>

    <div id="global-section" class="relative">
        <div id="terminal-wrapper">
            <?php require "components/terminal.php" ?>
        </div>
        <section id="contact-global-section">
            <div id="first-section">
                <h1 id="page-title" class="unselectable">Contact me</h1>
                <p id="page-quote">I'm here to anwser any questions you may have <span class="bold"><em>about me</em></span>. Reach out to me using below form, and I'll respond as soon as I can.</p>
                
                <?php if($passed) { ?>
                    <p id="page-quote" class="green-message">Thanks <?php echo $name; ?>, your message has been successfully sent.</p>
                <?php } ?>
                
                <div>
                    <div class="flex">
                        <div class="input-container" style="margin-right: 8px">
                            <label for="name" class="label-style">Name</label>
                            <input form="email-form" required type="text" name="name" min="2" max="400" placeholder="Name" id="name" class="input-style inp">
                            <div class="input-strip"></div>
                        </div>
                        <div class="input-container">
                            <label for="email" class="label-style">Email</label>
                            <input form="email-form" required type="email" name="email" max="400" placeholder="Email" id="email" class="input-style inp">
                            <div class="input-strip"></div>
                        </div>
                    </div>
                    <div class="input-container">
                        <label for="subject" class="label-style">Subject</label>
                        <input form="email-form" required type="text" name="subject" max="1000" placeholder="Subject" id="subject" class="input-style inp">
                        <div class="input-strip"></div>
                    </div>
                    <div class="input-container">
                        <label for="message" class="label-style">Message</label>
                        <textarea form="email-form" required name="content" id="message" max="3000" placeholder="Message" class="textarea-style inp"></textarea>
                        <div class="input-strip"></div>
                    </div>
                    <div class="input-container flex">
                        <input type="submit" form="email-form" id="send" name="send" class="button-style-1" value="SEND">
                    </div>
                    <form action="" method="POST" id="email-form">
                        
                    </form>
                </div>
            </div>
            <div id="map-wrapper">
                <div id="mymap">
                    
                </div>
            </div>
            <script type="text/javascript">
                var map = L.map('mymap').setView([34.679, -1.934], 16);
                L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=UOAsoBZQPlK3kGKRLMet', {
                    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                }).addTo(map);

                var mouad_icon = L.icon({
                    iconUrl: "assets/images/icons/map_icon.png",
                    iconSize: [36, 36],
                    iconAnchor: [18,0]
                })
                var marker = L.marker([34.679080, -1.934211], {icon:mouad_icon}).addTo(map);
                marker.bindPopup("<b>Mouad Nassri</b><br><p style='margin: 0'>Enthusiast programmer<br><span style='color: rgb(71, 218, 71)'>@</span>: mouadstev1@gmail.com</p>").openPopup();

                
            </script>
        </section>
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
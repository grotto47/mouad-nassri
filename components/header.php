<?php

    $home_selected = isset($home_selected) ? $home_selected : "";
    $about_selected = isset($about_selected) ? $about_selected : "";
    $skills_selected = isset($skills_selected) ? $skills_selected : "";
    $portfolio_selected = isset($portfolio_selected) ? $portfolio_selected : "";
    $contact_selected = isset($contact_selected) ? $contact_selected : "";

?>

<header class="relative" id="hdr">
    <div>
        <div class="logo-container relative">
            <div class="relative">
                <div class="flex align-items">
                    <img src="assets/images/logo-anim-assets/open-angle-bracket.png" class="bracket" alt="open angle bracket image">
                    <div id="first-logo-text-container">
                        <img src="assets/images/logo-anim-assets/MOUAD NASSRI.png" class="logo-text" alt="Mouad Nassri text logo">
                    </div>
                    <img src="assets/images/logo-anim-assets/closed-angle-bracket.png" class="bracket" alt="close angle bracket image">
                </div>
                <div>
                    <div id="second-logo-text-container">
                        <img src="assets/images/logo-anim-assets/WEB DEVELOPER.png" class="logo-text2" alt="Web developer text image">
                    </div>
                </div>
            </div>
            <div id="expand-logo">

            </div>
        </div>
        <div class="vertical-menu">
            <div id="show-menu"></div>
            <a href="index" class="menu-button-container relative home-button <?php echo $home_selected; ?>">
                <div class="menu-button-image absolute home-back"></div>

                <input class="uncolored-image-class" type="hidden" value="home-back">
                <input class="colored-image-class" type="hidden" value="home-colored-back">

                <p href="" class="menu-button-text">Home</p>
            </a>
            <a href="about" class="menu-button-container relative about-button <?php echo $about_selected; ?>">
                <div class="menu-button-image absolute about-back"></div>

                <input class="uncolored-image-class" type="hidden" value="about-back">
                <input class="colored-image-class" type="hidden" value="about-colored-back">

                <p href="" class="menu-button-text">About</p>
            </a>
            <a href="skills" class="menu-button-container relative skills-button <?php echo $skills_selected; ?>">
                <div class="menu-button-image absolute skills-back"></div>

                <input class="uncolored-image-class" type="hidden" value="skills-back">
                <input class="colored-image-class" type="hidden" value="skills-colored-back">

                <p href="" class="menu-button-text">Skills</p>
            </a>
            <a href="portfolio" class="menu-button-container relative portfolio-button <?php echo $portfolio_selected; ?>">
                <div class="menu-button-image absolute portfolio-back"></div>

                <input class="uncolored-image-class" type="hidden" value="portfolio-back">
                <input class="colored-image-class" type="hidden" value="portfolio-colored-back">

                <p href="" class="menu-button-text">Portfolio</p>
            </a>
            <a href="contact" class="menu-button-container relative contact-button <?php echo $contact_selected; ?>">
                <div class="menu-button-image absolute contact-back"></div>

                <input class="uncolored-image-class" type="hidden" value="contact-back">
                <input class="colored-image-class" type="hidden" value="contact-colored-back">

                <p href="" class="menu-button-text">Contact</p>
            </a>
        </div>
    </div>
    <div class="vertical-bottom-social-container">
        <a href="https://github.com/Hostname47" target='_blank' class="vertical-social-button github-back social_m_icon"></a>
        <a href="https://www.youtube.com/channel/UCsmtbO_dUfDyRLti7AOIxmQ" target='_blank' class="vertical-social-button youtube-back"></a>
        <a href="" target='_blank' class="vertical-social-button twitter-back"></a>
        <a href="https://www.facebook.com/Apathosdude/" target='_blank' class="vertical-social-button fb-back"></a>
        <a href="" target='_blank' class="vertical-social-button contact-me-back"></a>
    </div>
</header>

<div id="terminal-container">
    <div id="terminal-header" class="relative">
        <div class="flex terminal-buttons-container">
            <div class="terminal-header-round yellow-button hide-button"></div>
            <div class="terminal-header-round green-button resize-button"></div>
            <div class="terminal-header-round red-button exit-button"></div>
        </div>
        <p id="terminal-title" class="unselectable"><span style="font-family: Helvetica">T</span>erminal - root@nassri: ~</p>
        <div class="absolute flex align-items" id="auto-animated-button">
            <div>auto animated : </div>
            <img src="assets/images/icons/off.png" id="auto-annimation-state-image" alt="auto animated toggle button">
            <input type="hidden" class="auto-animated" value="0">
        </div>
    </div>
    <div id="terminal-without-header" class="relative">
        <div id="terminal-help-button-container">
            <div id="terminal-help-button">

            </div>
            <div class="terminal-character" id="terminal-help-hint"></div>
        </div>
        <div id="author-container">
            <div style="display: flex">
                <span id="terminal-author">
                    <pre>
   __  _______  __  _____   ___  _  _____   ___________  ____
  /  |/  / __ \/ / / / _ | / _ \/ |/ / _ | / __/ __/ _ \/  _/
 / /|_/ / /_/ / /_/ / __ |/ // /    / __ |_\ \_\ \/ , _// /  
/_/  /_/\____/\____/_/ |_/____/_/|_/_/ |_/___/___/_/|_/___/  
                    </pre>
                </span>
            </div>
        </div>
        <div class="flex justify-content" id="titles-box">
            <div id="header-titles">
                <div class="margin-bottom6 terminal-top-sentence">Out beyond ideas of wrongdoing and rightdoing there is a field, I'll meet you there.</div>
                <div class="margin-bottom6 terminal-top-sentence">When the soul lies down in that grass the world is too full to talk about..</div>
                <div class="margin-bottom6 terminal-top-sentence" style="margin: 8px 0 0 0">~Jalaluddin Rumi</div>
            </div>
        </div>
        <div style="padding: 4px 0 8px 20px">
            <p class="terminal-character">
                <span style="font-weight: 500; margin-top: 12px; padding: 4px 4px 4px 0; color: rgb(39, 219, 84)">mouad@DESKTOP-hostname47</span>
                <span class="terminal-character" style="color: rgb(255, 93, 228);">MINGW64<span class="terminal-character" style="color: rgb(255, 255, 95); padding-left: 2px">~</span></span>
            </p>
        </div>
        <div id="scrollable-terminal-section" class="relative">
            <div id="scroll">
                <div id="scroll-top"></div>
                <div id="scroll-bar"></div>
                <div id="scroll-bottom"></div>
            </div>
            <div class="relative" style="height: 100%">
                <div id="content-wrapper">
                    <input type="text" id="terminal-input-helper">
                    <div id="terminal-content" class="terminal-character relative">
                        <span class="command-starter unselectable">~ </span>
                        <span class="terminal-command"></span>
                        <span id="cursor"></span>
                        <span class="terminal-result"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
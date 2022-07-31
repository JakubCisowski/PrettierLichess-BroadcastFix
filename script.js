// ==UserScript==
// @name         Prettier Lichess - Broadcast fix
// @version      1.5
// @description  Changes games padding on broadcast section, and removes streamers section.
// @author       Ivan Pavlov
// @match        https://lichess.org/broadcast/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const initialIntervalMs = 500; // Initial frequency of checking for broadcast section.
    const backupIntervalMs = 10000; // After initial styling backup interval is deployed to style every few seconds to prevent bugs with styling.

    let initialIntervalId = window.setInterval(changePadding, initialIntervalMs);
    let backupIntervalDeployed = false;

    function changePadding() {
        let gamesSection = document.querySelectorAll("[class^=study__chapters]");
        let streamersSection = document.querySelectorAll("[class^=context-streamers]");

        // Check if section is found (user can be switched to broadcast tab).
       // if (gamesSection != undefined){
        if (gamesSection.length > 0){
            let gamesAmount = gamesSection[0].children.length;
            let padding = determinePaddingValue(gamesAmount);

            for (let child of gamesSection[0].children)
            {
                child.style.cssText = 'padding:' + padding + 'px 1px !important';
            }

            // Delete streamers section.
            if(streamersSection != undefined) {
               streamersSection[0].remove();
            }

            // Stop refreshing when section is found.
            window.clearInterval(initialIntervalId); // bug: for some reason this doesn't clear the interval
            // Do this only once - after initial styling style every X ms. This prevents multiple bugs which disable styling.
            if(backupIntervalDeployed == false){
                window.setInterval(changePadding, backupIntervalMs);
            }
            backupIntervalDeployed = true; // Set to true to deploy backup only once.
        }
    }

     function determinePaddingValue(gamesAmount) {
         switch (gamesAmount) {
             case 1:
                 return 100;
             case 2:
                 return 50;
             case 3:
                 return 22;
             case 4:
                 return 14;
             case 5:
                 return 8;
             case 6:
                 return 5;
             case 7:
                 return 3;
             case 8:
                 return 1;
             default:
                 return 0;
         }
     }

    // CONVERTING GAMES AMOUNT TO PADDING VALUE IN PIXELS
    //  1  game  ~ 100 pixels
    //  2  games ~ 50  pixels
    //  3  games ~ 22  pixels
    //  4  games ~ 14  pixels
    //  5  games ~ 8   pixels
    //  6  games ~ 5   pixels
    //  7  games ~ 3   pixels
    //  8  games ~ 1   pixels
    //  9+ games ~ 0   pixels

    // Make sure padding will fix every time user switch tabs.
    let elements = document.querySelectorAll("[class^=relay-tour]");
    elements[4].addEventListener("click", restartPaddingFix);
    function restartPaddingFix() {
        initialIntervalId = window.setInterval(changePadding, initialIntervalMs);
    }
})();

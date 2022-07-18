// ==UserScript==
// @name         Prettier Lichess - Broadcast fix
// @version      1.2
// @description  Changes games padding on broadcast section, and removes streamers section.
// @author       Ivan Pavlov
// @match        https://lichess.org/broadcast/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    let intervalID = window.setInterval(changePadding, 500);

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

            // // Delete streamers section.
            // if(streamerSection != undefined) {
            //    streamersSection[0].remove();
            // }

            // Stop refreshing when section is found.
            window.clearInterval(intervalID); // bug: for some reason this doesn't clear the interval
        }

        if(streamersSection != undefined) {
            streamersSection.remove();
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
    //  1  games ~ 100 pixels
    //  2  games ~ 50  pixels
    //  3  games ~ 22  pixels
    //  4  games ~ 14  pixels
    //  5  games ~ 8   pixels
    //  6  games ~ 5   pixels
    //  7  games ~ 3   pixels
    //  8  games ~ 1   pixels
    //  9+ games ~ 0   pixels
})();

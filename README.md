# PrettierLichess Broadcast Fix

JS userscript for [lichess.org](https://lichess.org/) - Fix to [Prettier Lichess](https://prettierlichess.github.io/) chrome extension. 
Changes game objects padding on broadcast section (so that the user can see as many games possible without scrolling), and removes streamers section.

## Installation guide

* For the script to be deployed, the easiest way is to download userscript manager, the most popular one is Tampermonkey ([Chrome download](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pl), [Mozilla Firefox download](https://addons.mozilla.org/pl/firefox/addon/tampermonkey/), [Opera download](https://addons.opera.com/pl/extensions/details/tampermonkey-beta/)). Popular manager alternatives: Greasemonkey, Violentmonkey and Adguard for Internet Explorer.
* Once installed, click on the manager's icon in the top-right corner of the browser and select *'Add new script'*.
* Replace sample code with the code from *'script.js'* file in this repository, save the script and here you go.

## Screenshots

*Before - only 4 games visible at once*

![scr1](https://i.imgur.com/HwCVd7J.png)

*After*

![scr2](https://i.imgur.com/98Ic7Uv.png)

## Upcoming features, bugfixes

* Bug: After padding fix, when user switches to broadcast tab and then back to games again, padding doesn't fix again
* (Maybe) Add script versions to GitHub releases

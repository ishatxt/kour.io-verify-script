// ==UserScript==
// @name         3 checkmark
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  have fun
// @match        *://kour.io/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  var firstpartofname = "";
  var lastpartofname = "YOURNAME";

  function changeColor() {
    if (typeof unityInstance !== "undefined") {
      //change colour here "<colour=#FFFFFF>"
      var nickname =
        "<sprite=0>" +
        "<sprite=1>" +
        "<sprite=2>" + // do not change 0,1,2
        "<color=#FFFFFF>" +
        lastpartofname +
        "</color=>";

      unityInstance.SendMessage("MapScripts", "SetNickname", nickname);
    }
  }

  // speed
  setInterval(changeColor, 450); //time
})();

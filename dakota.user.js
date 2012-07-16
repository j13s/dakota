// ==UserScript==
// @name  Dakota
// @namespace http://www.whatshappen.in/
// @description Forces the Mr. Saturn typeface for YouTube comments.
// @match http://www.youtube.com/*
// ==/UserScript==

var stylesheet = document.createElement('style');
stylesheet.innerHTML = 'div .comment-text { font-family: earthbound; }';
document.body.appendChild(stylesheet);

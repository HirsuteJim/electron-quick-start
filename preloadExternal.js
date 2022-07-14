const {BrowserWindow} = require('electron');
/* eslint-disable no-undef */
/*
 * All of the Node.js APIs are available in the preload process.
 * It has the same sandbox as a Chrome extension.
 */
window.addEventListener('DOMContentLoaded', () => {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  var code = 'alert("hello world!");';
  try {
    s.appendChild(document.createTextNode(code));
    document.body.appendChild(s);
  } catch (e) {
    s.text = code;
    document.body.appendChild(s);
  }


// In the main process.
});

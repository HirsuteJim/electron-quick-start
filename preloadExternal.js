const {BrowserWindow} = require('electron');
/* eslint-disable no-undef */
/*
 * All of the Node.js APIs are available in the preload process.
 * It has the same sandbox as a Chrome extension.
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
 element.innerText = text;
}
  };

  for (const type of [
'chrome',
'node',
'electron'
]) {
    replaceText(`${type}-version`, process.versions[type]);
  }

// In the main process.

const {fork} = require('child_process');
fork(path.join(__dirname, 'child.js'), ['args'], {
'stdio': 'pipe'
});

  require('electron').shell.openExternal('http://google.com');

/*
 * Const win = new BrowserWindow({'width': 800,
 * 'height': 600});
 */

/*
 * Load a remote URL
 * win.loadURL('https://github.com');
 */

/*
 * Or load a local HTML file
 * win.loadFile('index.html');
 */


});

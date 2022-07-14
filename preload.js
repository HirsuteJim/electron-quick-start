const {BrowserWindow} = require('electron');
// const electron = require('electron');
// const BrowserWindow = electron.remote.BrowserWindow;
// const open = require('open');
const path = require('path');
/* eslint-disable no-undef */
/*
 * All of the Node.js APIs are available in the preload process.
 * It has the same sandbox as a Chrome extension.
 */

window.addEventListener('DOMContentLoaded', () => {
  // const mySpawnProcess = openChrome();
  // console.log(
  //   '🔴🟠🟡🟢🔵🟣 | file: preload.js | line 48 | mySpawnProcess',
  //   {mySpawnProcess}
  // )
  const { ipcRenderer } = require('electron')
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg) // prints "pong"
    })

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }

  // const myProcessID = document.createElement('p');
  // myProcessID.innerHTML = typeof mySpawnProcess;
  // document.body.appendChild(myProcessID);
  const button = document.createElement('button')
  // button.addEventListener('click', CreateWindow2)
  button.addEventListener('click', () => {
    ipcRenderer.send('asynchronous-message', 'ping')
})
  button.innerHTML = "OPEN NEW WINDOW PLZ"
  document.body.appendChild(button);

  // In the main process.

  /*
   * Const {fork} = require('child_process');
   * fork(path.join(__dirname, 'child.js'), ['args'], {
   * 'stdio': 'pipe'
   * });
   */

  // require('electron').shell.openExternal('http://google.com');
  // require('electron').shell.openExternal('chrome://google.com');

  // async function openChrome() {
  //   //   await open('https://apple.com', {'app': {'name': 'chrome'}});
  //   // }
  //   const mySpawn = await open('https://apple.com', {
  //     newInstance: true,
  //     app: {
  //       name: open.apps.chrome,
  //       arguments: ['--remote-debugging-port=9222'],
  //     },
  //   });
  //   return mySpawn;
  // }

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

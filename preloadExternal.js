const { BrowserWindow } = require('electron');
// process.once('loaded', () => {

//   const { contextBridge, ipcRenderer, shell } = require('electron')




//   contextBridge.exposeInMainWorld('electron', {
//     on(eventName, callback) {
//       ipcRenderer.on(eventName, callback)
//     },

//     async invoke(eventName, ...params) {
//       return await ipcRenderer.invoke(eventName, ...params)
//     },

//     async shellOpenExternal(url) {
//       await shell.openExternal(url)
//     },

//     async shellOpenPath(file) {
//       await shell.openPath(file)
//     },

//     async shellTrashItem(file) {
//       await shell.trashItem(file)
//     }
//   })
// })
/* eslint-disable no-undef */
/*
 * All of the Node.js APIs are available in the preload process.
 * It has the same sandbox as a Chrome extension.
 */
// window.addEventListener('DOMContentLoaded', () => {
//   var s = document.createElement('script');
//   s.type = 'text/javascript';
//   var code = 'alert("Yo! hello world!");';
//   try {
//     s.appendChild(document.createTextNode(code));
//     document.body.appendChild(s);
//   } catch (e) {
//     s.text = code;
//     document.body.appendChild(s);
//   }


// In the main process.
// });

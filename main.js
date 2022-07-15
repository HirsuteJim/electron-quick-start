// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');

let newWindow;
//ipc
const { ipcMain } = require('electron')
ipcMain.on('openNewWindow', (event, arg) => {
  createWindow2();
})
ipcMain.on('alterExistingWindow', (event, arg) => {
  newFunc(newWindow);
})
ipcMain.on('Sending message', (event, arg) => {
  console.log('🔴🟠🟡🟢🔵🟣 | file: main.js | line 15 | ipcMain.on | arg', arg);
  console.log('🔴🟠🟡🟢🔵🟣 | file: main.js | line 15 | ipcMain.on | event', event);
  console.log('Message Recieved!');
})



/*
* ==================================================
*   Create the primary App (electron) window
* ==================================================
*/

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
    'webPreferences': {
      'preload': path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      experimentalFeatures: true,
      allowRunningInsecureContent: true,
      webSecurity: false,
      nodeIntegrationInSubFrames: true,
      nodeIntegrationInWorker: true,
    }
  });
  
  // And load the index.html of the app.
  mainWindow.loadFile('index.html');
  
  /*
  * Open the DevTools.
  */
 mainWindow.webContents.openDevTools()
}


/*
* ==================================================
*   Create the second window
* ==================================================
*/

const createWindow2 = () => {
  newWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preloadExternal.js'),
      preload: path.join(__dirname, 'preloadExternal.js'),
      nodeIntegration: true,
      contextIsolation: false,
      experimentalFeatures: true,
      allowRunningInsecureContent: true,
      webSecurity: false,
      nodeIntegrationInSubFrames: true,
      nodeIntegrationInWorker: true,
    },


    
  });
  
  // newWindow.loadURL('http://localhost:8080')
  newWindow.webContents.loadURL('http://localhost:8080')

  // setTimeout(() => {
  //   newWindow.onload = function () {
  //     // const myReturnButton = this.document.body.createElement('button');
  //     const myReturnButton = this.document.createElement('button');
  //     myReturnButton.innerHTML = 'Go Back!!';
  //     myReturnButton.addEventListener('click',() => {
  //       ipcRenderer.send('Sending message', 'ping')
  //     })
  //     this.document.body.appendChild(myReturnButton);
  //   }
  // }, 5000)

  // newWindow.loadFile('secondWindow.html');
  newWindow.webContents.openDevTools()
}

const newFunc = (window) => {
  const script = `
  const { ipcRenderer } = require('electron');

  const btn = document.createElement('button');
  btn.innerHTML = 'ADDED BTN';
  btn.addEventListener('click', () => {
    ipcRenderer.send('Sending message', 'ping')
  })
  document.body.appendChild(btn);
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
  `;
  window.webContents.executeJavaScript(script);


}
/*
 * This method will be called when Electron has finished
 * initialization and is ready to create browser windows.
 * Some APIs can only be used after this event occurs.
 */
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {

    /*
     * On macOS it's common to re-create a window in the app when the
     * dock icon is clicked and there are no other windows open.
     */
    if (BrowserWindow.getAllWindows().length === 0) {
 createWindow();
}
  });
});

/*
 * Quit when all windows are closed, except on macOS. There, it's common
 * for applications and their menu bar to stay active until the user quits
 * explicitly with Cmd + Q.
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
 app.quit();
}
});

/*
 * In this file you can include the rest of your app's specific main process
 * code. You can also put them in separate files and require them here.
 */

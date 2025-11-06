const { app, BrowserWindow,ipcMain } = require('electron/main');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    // fullscreen: true,

    height: 480,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, 'src', 'modules', 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile(path.join(__dirname, 'src', 'views', 'main.html'));

  // Listen for close request from renderer
  ipcMain.on('app:close', () => {
    win.close();
  });
}

app.whenReady().then(() => {
  createWindow();
});
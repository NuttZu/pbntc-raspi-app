const { app, BrowserWindow } = require('electron/main');;
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    preload: path.join(__dirname, 'preload.js'),
    width: 800,
    height: 600
  });

  win.loadFile('src/views/main.html');
}

app.whenReady().then(() => {
  createWindow();
});
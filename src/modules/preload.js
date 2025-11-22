const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  closeApp: () => ipcRenderer.send('app:close'),

  // Listen for "playSound" sent from main.js
  onPlaySound: (callback) => ipcRenderer.on("playSound", callback)
  
});

console.log("Preload script loaded");
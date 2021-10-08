const { app, BrowserWindow, ipcMain} = require('electron');
const os = require('os');
const path = require('path/posix');
require('electron-reload')(__dirname);
const {cpu, cpuCache, currentLoad} = require('systeminformation');

app.whenReady().then(main);

let window;

async function main() {
    window = new BrowserWindow({
        width: 500,
        height: 400,
        resizable: false,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname + '/backend/preload.js')
        },
        // show: false,

    });

    // window.webContents.openDevTools();

    window.loadFile(path.join(__dirname, '/app/index.html'));
}


ipcMain.handle('cpu/get', async (_, data) => {
    const usage = await currentLoad();
    return usage;
})

ipcMain.on('app/close', ()=>{
    console.log('quit')
    app.quit();
})

ipcMain.on('app/minimize', ()=>{
    window.minimize();
})
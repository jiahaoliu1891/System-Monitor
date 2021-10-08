const os = require('os');
const { ipcRenderer, contextBridge } = require("electron");
const API = {
    window: {
        close: () => ipcRenderer.send('app/close'),
        minimize: () => ipcRenderer.send('app/minimize')
    },
    cpuUsage: () => ipcRenderer.invoke("cpu/get")
}

contextBridge.exposeInMainWorld("app", API);
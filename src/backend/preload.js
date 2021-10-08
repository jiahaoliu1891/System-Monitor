const os = require('os');
const { ipcRenderer, contextBridge } = require("electron");
const API = {
    cpuUsage: () => ipcRenderer.invoke("cpu/get")
}

contextBridge.exposeInMainWorld("app", API);
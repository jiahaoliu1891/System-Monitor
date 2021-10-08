const CPU_USED_TEXT = document.getElementById('used-cpu');
const INNER_BAR = document.getElementById('inner-bar');

async function getCpuUsage() {
    const usage = await app.cpuUsage();
    const usedOverall = usage.currentLoad;
    console.log('cpu current load: ' + usedOverall)
    upatePercentage(usedOverall);
}

setInterval(getCpuUsage, 1000);

function upatePercentage(percent = 0) {
    const perText = `${percent.toFixed(1)}%`
    CPU_USED_TEXT.innerText = perText;
    INNER_BAR.style.width = `${percent.toFixed(1)}%`;
}
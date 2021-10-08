
const MINUS = document.getElementById('minimize');
const CLOSE_APP = document.getElementById('closeapp');

console.log(MINUS)
console.log(CLOSE_APP)

MINUS.addEventListener('click', minimizeHandler);
CLOSE_APP.addEventListener('click', closeAppHandler);


function minimizeHandler() {
    app.window.minimize();
}


function closeAppHandler() {
    app.window.close();
}
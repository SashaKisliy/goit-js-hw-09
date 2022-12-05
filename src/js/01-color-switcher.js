function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body')
let timerId = null;

function onClickStart(e) {
    timerId = setInterval((e) => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
}

function onClickStop(e) {
    clearInterval(timerId);
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
}

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop)

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;


console.log(startBtn);
console.log(stopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};


startBtn.addEventListener('click', () => {
    // console.log('click');
    timerId = setInterval(() => {
        document.body.style.backgroundColor =
        getRandomHexColor()
    }, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled', true);
});


stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled', true);
});
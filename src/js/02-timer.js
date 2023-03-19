import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysSpanEl = document.querySelector('[data-days]');
const hoursSpanEl = document.querySelector('[data-hours]');
const minSpanEl = document.querySelector('[data-minutes]');
const secSpanEl = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      
        if (startTime.selectedDates[0] > currentTime) {
        deltaTime = startTime.selectedDates[0].getTime() - currentTime;
        startBtn.removeAttribute('disabled');
    } else {
        startBtn.setAttribute('disabled', true);
        Notiflix.Notify.failure('Please choose a date in the future');
        return
    }
  },
};

const currentTime = Date.now();
const startTime = flatpickr(inputEl, options);
let deltaTime = null;

startBtn.setAttribute('disabled', true);

const timer = {
    start() {
        const intervalId = setInterval(() => {
            deltaTime -= 1000;
            const saleTime = convertMs(deltaTime);
            console.log(saleTime);
        }, 1000);
    }
};
    
startBtn.addEventListener('click', handleStartTimer);

function handleStartTimer() {
    // if (startTime.selectedDates[0] > currentTime) {
    //     deltaTime = startTime.selectedDates[0].getTime() - currentTime;
    //     startBtn.removeAttribute('disabled');
        timer.start()
    // } else {
    //     startBtn.setAttribute('disabled', true);
    //     Notiflix.Notify.failure('Please choose a date in the future');
    //     return
    // }
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function convertMs(deltaTime) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = addLeadingZero(Math.floor(deltaTime / day));
  const hours = addLeadingZero(Math.floor((deltaTime % day) / hour));
  const minutes = addLeadingZero(Math.floor(((deltaTime % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((deltaTime % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


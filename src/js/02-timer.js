import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector('button[data-start]')

startBtn.setAttribute('disabled', true);
const DELAY = 1000;

let dates = null

startBtn.addEventListener('click' , startTimer)


flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        dates = selectedDates[0];
        inputDates(dates)
    },
});


function inputDates(date) {
    if (date >= Date.now()) {
        startBtn.removeAttribute('disabled')
    } else {
        Notify.failure('Change dates')
    }
}

function startTimer() {
    startBtn.setAttribute('disabled', true);


    const timerId = setInterval(() => {
        const timerValue = dates - Date.now();
        const { days, hours, minutes, seconds } = convertMs(timerValue);
        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds
    
        if (timerValue < DELAY) {
          clearInterval(timerId);
          Notify.success(`${dates} is now`);
        }
      }, DELAY);
      //   console.log(inputDates);
    
    
    
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
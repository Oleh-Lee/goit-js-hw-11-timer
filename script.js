"use strict";

class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate;
  }

  timer() {
    setInterval(() => {
      const currentTime = new Date();
      const time = this.targetDate.getTime() - currentTime.getTime();

      const untilDays = document.querySelector(
        this.selector + ' span[data-value="days"]'
      );
      const untilHours = document.querySelector(
        this.selector + ' span[data-value="hours"]'
      );
      const untilMins = document.querySelector(
        this.selector + ' span[data-value="mins"]'
      );
      const untilSeconds = document.querySelector(
        this.selector + ' span[data-value="secs"]'
      );

      untilDays.innerText = Math.floor(time / (1000 * 60 * 60 * 24));
      untilHours.innerText = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      untilMins.innerText = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      untilSeconds.innerText = Math.floor((time % (1000 * 60)) / 1000);
    }, 1000);
  }
}

const countdown = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aprl 6, 2020")
});
countdown.timer();

// const untilDays = document.querySelector('span[data-value="days"]');
// const untilHours = document.querySelector('span[data-value="hours"]');
// const untilMins = document.querySelector('span[data-value="mins"]');
// const untilSeconds = document.querySelector('span[data-value="secs"]');

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     (this.selector = selector), (this.targetDate = targetDate);
//   }
// }

// let timer = setInterval(() => {
//   const curentTime = new Date();

//   const time = countdown.targetDate.getTime() - curentTime.getTime();

//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   untilDays.innerHTML = days;

//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   untilHours.innerHTML = hours;

//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   untilMins.innerHTML = mins;

//   const secs = Math.floor((time % (1000 * 60)) / 1000);
//   untilSeconds.innerHTML = secs;
// }, 1000);

// const countdown = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Aprl 6, 2020")
// });

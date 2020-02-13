untilDays = document.querySelector('span[data-value="days"]');
untilHours = document.querySelector('span[data-value="hours"]');
untilMins = document.querySelector('span[data-value="mins"]');
untilSeconds = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.selector = selector), (this.targetDate = targetDate);
  }
}

let timer = setInterval(() => {
  const curentTime = new Date();

  const time = countdown.targetDate.getTime() - curentTime.getTime();

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  untilDays.innerHTML = days;

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  untilHours.innerHTML = hours;

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  untilMins.innerHTML = mins;

  const secs = Math.floor((time % (1000 * 60)) / 1000);
  untilSeconds.innerHTML = secs;
}, 1000);

const countdown = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aprl 6, 2020")
});

const timerDisplay = document.querySelector(".display__time-left");
const endtimerDisplay = document.querySelector(".display__end-time");
const btn = document.querySelectorAll("[data-time]");

let countdown;

function timer(seconds) {
  clearInterval(countdown);
  let now = Date.now();
  let then = now + seconds * 1000;
  displayTimeLeft(seconds);
  endtimer(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60);
  const remaindersecond = seconds % 60;
  const display = `${min < 10 ? "0" : ""}${min} : ${
    remaindersecond < 10 ? "0" : ""
  }${remaindersecond}`;
  timerDisplay.textContent = display;
}

function endtimer(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const min = end.getMinutes();
  endtimerDisplay.textContent = `Be Back At ${
    hours > 12 ? hours - 12 : hours
  }:${min < 10 ? "0" : ""}${min}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
btn.forEach((btn) => btn.addEventListener("click", startTimer));

document.customForm.addEventListener('submit',function(e) {
    e.preventDefault()
    const mins = this.minutes.value
    timer(mins * 60 )
    this.reset()

})
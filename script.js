const time = document.getElementById('watch');
const startButton = document.querySelector('.start-btn');
const pauseButton = document.querySelector('.pause-btn');
const stopButton = document.querySelector('.stop-btn');
var sec = 0;
var min = 0;
var hr = 0;
var interval;

function updateTime() {
    time.innerHTML = ('00' + hr).slice(-2) + ':' + ('00' + min).slice(-2) + ':' + ('00' + sec).slice(-2);
}

function startTimer() {
    interval = setInterval(watch, 1000);
}

function pauseTimer() {
    clearInterval(interval);
}

function stopTimer() {
    pauseTimer();
    min = 0;
    sec = 0;
    hr = 0;
    updateTime();
}

function watch() {
    sec++;
    if (sec === 60) {
        min++;
        sec = 0;
    }
    if (min === 60) {
        hr++;
        min = 0;
    }
    updateTime();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);

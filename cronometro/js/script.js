let segEl = document.getElementById("seg");
let minEl = document.getElementById("mins");
let hrsEl = document.getElementById("hrs");

let s = 0;
let m = 0;
let h = 0;
let intervalId = null;

function updateDisplay() {
    segEl.textContent = String(s).padStart(2, "0");
    minEl.textContent = String(m).padStart(2, "0");
    hrsEl.textContent = String(h).padStart(2, "0");
}

function startTimer() {
    if (intervalId) return;
    intervalId = setInterval(() => {
        s++;
        if (s === 60) {
            s = 0;
            m++;
        }
        if (m === 60) {
            m = 0;
            h++;
        }
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetTimer() {
    pauseTimer();
    s = 0;
    m = 0;
    h = 0;
    updateDisplay();
}

let startBtn = document.querySelector(".btn button:nth-child(1)");
let pauseBtn = document.querySelector(".btn button:nth-child(2)");
let resetBtn = document.querySelector(".btn button:nth-child(3)");

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

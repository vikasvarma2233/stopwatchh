let start = document.getElementById("start");
let stop = document.getElementById("stop");
let restart = document.getElementById("restart");

let hour = 0;
let minute = 0;
let second = 0;

let timer = null;

// Start Button
start.addEventListener("click", run);

// Stop Button
stop.addEventListener("click", stopTimer);

// Reset Button
restart.addEventListener("click", resetTimer);

function run() {
    // Prevent multiple intervals
    if (timer !== null) {
        return;
    }

    timer = setInterval(() => {

        second++;

        if (second === 60) {
            second = 0;
            minute++;

            if (minute === 60) {
                minute = 0;
                hour++;
            }
        }

        document.getElementById("box").innerText =
            hour.toString().padStart(2, "0");

        document.getElementById("box2").innerText =
            minute.toString().padStart(2, "0");

        document.getElementById("box3").innerText =
            second.toString().padStart(2, "0");

    }, 100);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;

    hour = 0;
    minute = 0;
    second = 0;

    document.getElementById("box").innerText = "00";
    document.getElementById("box2").innerText = "00";
    document.getElementById("box3").innerText = "00";
}
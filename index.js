const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm")

// This function get time from your machine 
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
// If h is less than 10 add zero in from of h else use the value of h
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl, (innerText = ampm);

// settimeout will reset the code block every 1000 mili Seconds
    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock()
function updateClock() {
    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to ensure two digits (e.g., 01, 02, ..., 09, 10, 11, ...)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time in the clock element
    const hour = document.getElementById('hour');
    hour.textContent = `${hour}`;
    const min = document.getElementById('minute');
    min.textContent = `${minutes}`;
    const second = document.getElementById('second');
    second.textContent = `${seconds}`;
}

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();

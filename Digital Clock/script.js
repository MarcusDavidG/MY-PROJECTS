function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format time as HH:MM:SS
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").innerText = timeString;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initialize the clock immediately

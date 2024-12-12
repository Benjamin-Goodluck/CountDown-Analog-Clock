let timerInterval;

function startCountdown() {
  // Clear any existing interval
  if (timerInterval) clearInterval(timerInterval);

  // Get the input target date
  const input = document.getElementById("target-time").value;
  if (!input) {
    alert("Please select a valid date and time.");
    return;
  }
  const targetDate = new Date(input).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      document.querySelector(".countdown").innerHTML = "<h1>Countdown Ended</h1>";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  // Update the countdown every second
  timerInterval = setInterval(updateCountdown, 1000);

  // Initialize countdown on button click
  updateCountdown();
}

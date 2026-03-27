function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  const heading = document.getElementById("timeRemaining");

  let totalSeconds = Number(input);

  function updateDisplay(seconds) {
    const min = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const formattedMin = String(min).padStart(2, "0");
    const formattedSecs = String(secs).padStart(2, "0");

    heading.innerText = `Time Remaining: ${formattedMin}:${formattedSecs}`;
  }
  updateDisplay(totalSeconds);

  const timer = setInterval(() => {
    totalSeconds--;

    if (totalSeconds <= 0) {
      updateDisplay(0);
      clearInterval(timer);
      playAlarm();
    } else {
      updateDisplay(totalSeconds);
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

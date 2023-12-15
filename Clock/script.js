const clock = document.getElementById("clock");
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  clock.textContent = timeString;
  if (timeString.includes("11:11")) {
    clock.textContent = "Make a Wish";
  } else {
    clock.textContent = timeString;
  }
}

setInterval(updateClock, 1000);
updateClock();

function updateSeconds() {
  let secondsVisualizer = document.getElementById("myDiv");

  let today = new Date();
  let currentSeconds = today.getSeconds();
  console.log(currentSeconds);

  //let secondsToSize = map(currentSeconds, 0, 59, 0, 100);
  //console.log(secondsToSize)

  let secondsToBorderRadius = map(currentSeconds, 0, 59, 100, 0);

  secondsVisualizer.style.width = secondsToSize + "vw";
  secondsVisualizer.style.height = secondsToSize + "vh";

  secondsVisualizer.style.borderRadius = secondsToBorderRadius + "%";
}

setInterval(updateSeconds, 1000);

// DON'T TOUCH THIS!
function map(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

clock.style.color = "blue";
function changeColor() {
  console.log("running");
  clock.style.color =
    "hsla(" + Math.floor(Math.random() * 360) + ", 75%, 58%, 1)";
  if (clock.textContent === "Make a Wish") {
    clock.style.color = "yellow";
  }
}

window.setInterval(changeColor, 1000);

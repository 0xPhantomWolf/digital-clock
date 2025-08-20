function updateClock() {
  const now = new Date();

  // Time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Add leading zero
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").textContent =
    `${hours}:${minutes}:${seconds} ${ampm}`;

  // Date
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent =
    now.toLocaleDateString(undefined, options);

  // Greeting + Background Change
  const greeting = document.getElementById("greeting");
  const body = document.body;

  if (now.getHours() < 12) {
    greeting.textContent = "☀️ Good Morning!";
    body.className = "morning";
  } else if (now.getHours() < 18) {
    greeting.textContent = "🌤️ Good Afternoon!";
    body.className = "afternoon";
  } else {
    greeting.textContent = "🌙 Good Evening!";
    body.className = "evening";
  }
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Run once immediately

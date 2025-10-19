// Select time element
const timeElement = document.getElementById("current-time");

// Function to update time in milliseconds
function updateTime() {
  timeElement.textContent = Date.now();
}

// Initial render
updateTime();

// Optional: update every second
setInterval(updateTime, 1000);

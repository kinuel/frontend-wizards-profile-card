function updateTime() {
  const timeElement = document.getElementById("time");
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);

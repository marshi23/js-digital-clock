function updateClock() {
  let currentTime = new Date();

  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();

  // Compose the string for display
  let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;


  $("#clock").html(currentTimeString);
}

$(document).ready(function() {
  setInterval('updateClock()', 1000);
});
// 

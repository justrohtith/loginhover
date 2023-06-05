var button = document.getElementById("signinBtn");

button.addEventListener("mousemove", function(event) {
  var buttonRect = button.getBoundingClientRect();

  var offsetX = event.clientX - buttonRect.width / 2;
  var offsetY = event.clientY - buttonRect.height / 2;

  // Calculate the maximum allowed position
  var maxX = window.innerWidth - buttonRect.width;
  var maxY = window.innerHeight - buttonRect.height;

  // Clamp the position within the window boundaries
  offsetX = Math.min(Math.max(0, offsetX), maxX);
  offsetY = Math.min(Math.max(0, offsetY), maxY);

  button.style.left = offsetX + "px";
  button.style.top = offsetY + "px";
});

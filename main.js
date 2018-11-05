


window.onload = function() {

  run();
}

function run() {
  var mass = prompt("Mass Input");
  // document.getElementById("mass").innerHTML = mass;
  animateValues("mass", 0, mass, 1800);
  eat_number = Math.round(1000/mass);
  // document.getElementById("eat_number").innerHTML = eat_number;
  animateValues("eat_number", 0, eat_number, 2200);
  body_number = Math.round(11000/mass);
  // document.getElementById("body_number").innerHTML = body_number;
  animateValues("body_number", 0, body_number, 2600)
  document.getElementById("dino").style.animationName = "grow";
}

function animateValues(id, start, end, duration) {
  var obj = document.getElementById(id);
  var range = end - start;
  var minTimer = 50;
  var stepTime = Math.max(stepTime, minTimer);
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function runTimer() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - (remaining * range));
    obj.innerHTML = value;
    if (value == end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(runTimer, stepTime);
  runTimer();
}

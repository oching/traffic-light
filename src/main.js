var intersectionJs = require('./intersection');
var intersection = intersectionJs.Intersection;
var NS_DIRECTION = intersectionJs.NS_DIRECTION;
var EW_DIRECTION = intersectionJs.EW_DIRECTION;

function toString(second) {
  if (second < 10) return "0" + second; 
  else return second;
}

function log(minute, second) {
  console.log("\n@ " + minute + ":" + toString(second));
  console.log("North/South: " + intersection.showTrafficLightState(NS_DIRECTION, minute, second));
  console.log("East/West:   " + intersection.showTrafficLightState(EW_DIRECTION, minute, second));
}

console.log("Starting simulation of traffic light intersection..");

var minute = 0;
var second = 0;
while(minute <= 30) {
  log(minute, second);
  if (minute < 30) log(minute + 4, 30);
  minute = minute + 5;
}

// comment out if more verbose logging is desired
/*
console.log("\n\n\n***** Display traffic light every second *******");
for (min = 0; min <= 30; min++) {
  for (sec = 0; sec <= 59; sec++) {
    log(min, sec);
  }
}
*/

console.log("\nEnd of simulation.");

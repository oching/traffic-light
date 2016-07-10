var NS_DIRECTION = "North/South";
var EW_DIRECTION = "East/West";
var RED = "RED";
var GREEN = "GREEN";
var YELLOW = "YELLOW";

function Intersection() {
  this._trafficLights = [{direction: NS_DIRECTION, state: RED}, {direction: EW_DIRECTION, state: GREEN}];
}

function getState(initialState, minute, second) {
  if (shouldSwitchState(minute, second)) {
    if (initialState == RED) return GREEN;
    else return RED;
  } else {
    return initialState;
  }
}

function shouldSwitchState(minute, second) {
  if (minute%5 == 0 && minute%2 != 0 && second == 0) return true;
  else return false;
}

function isPossiblyYellow(minute, second) {
  if (second >= 30 && minute%5 == 4) return true;
  else return false;
}

function isBetweenFiveMinuteInterval(minute, second) {
  if (second != 0 && minute >= 5) return true;
  else false;
}

Intersection.prototype.showTrafficLightState = function(direction, minute, second) {

  for (i = 0; i < this._trafficLights.length; i++) {
    var trafficLight = this._trafficLights[i];
    if (trafficLight.direction == direction) {
      if (isPossiblyYellow(minute, second)) {
        var nextState = getState(trafficLight.state, minute + 1, 0);

        if (nextState == RED) return YELLOW;
        else return RED;

      } else if (isBetweenFiveMinuteInterval(minute, second)) {
        var nextMinuteInterval = ((minute/5) + 1) * 5; 
        var nextState = getState(trafficLight.state, nextMinuteInterval, 0);

        if (nextState == RED) return GREEN;
        else return RED;

      } else {
        return getState(trafficLight.state, minute, second);
      }
    }
  } 
  return "";
}

exports.Intersection = new Intersection();
exports.NS_DIRECTION = NS_DIRECTION;
exports.EW_DIRECTION = EW_DIRECTION;
exports.RED = RED;
exports.GREEN = GREEN;
exports.YELLOW = YELLOW;


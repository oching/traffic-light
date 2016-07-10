function Intersection() {
  this._trafficLights = [{direction: "North/South", state: "RED"}, {direction:"East/West", state: "GREEN"}];
}

Intersection.prototype.showTrafficLightState = function(direction, minute, second) {

  for (i = 0; i < this._trafficLights.length; i++) {
    var trafficLight = this._trafficLights[i]
    if (trafficLight.direction == direction) {
      if (minute%5 == 0 && second == 0) {
        if (trafficLight.state == "RED") return "GREEN";
        else return "RED";
      } else {
        return trafficLight.state;
      }
    }
  } 
  return "";
}

module.exports = Intersection

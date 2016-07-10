var chai = require('chai');
var Intersection = require('../src/intersection');

var expect = chai.expect; 
var assert = chai.assert;

describe('Intersection', function() {
  
  it('should have North/South in RED as initial state', function() {
    var intersection = new Intersection(); 
    var northSouthTrafficLight = intersection._trafficLights[0];

    expect(northSouthTrafficLight.direction).to.equal("North/South");
    expect(northSouthTrafficLight.state).to.equal("RED");
  });  

  it('should have East/West in GREEN as initial state', function() {
    var intersection = new Intersection();
    var eastWestTrafficLight = intersection._trafficLights[1];

    expect(eastWestTrafficLight.direction).to.equal("East/West");
    expect(eastWestTrafficLight.state).to.equal("GREEN");
  });

  it('should have North/South in RED at 2 minutes', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('North/South', 2, 0)).to.equal("RED");
  });

  it('should have East/West in GREEN at 2 minutes', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('East/West', 2, 0)).to.equal("GREEN");
  });

  it('should have North/South in GREEN at 5 minutes', function() {
    var intersection = new Intersection();
        
    expect(intersection.showTrafficLightState('North/South', 5, 0)).to.equal("GREEN");
  });

  it('should have East/West in RED at 5 minutes', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('East/West', 5, 0)).to.equal("RED");
  }); 

  it('should have North/South in RED at 10 minutes', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('North/South', 10, 0)).to.equal("RED");
  });

  it('should have East/West in GREEN at 10 minutes', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('East/West', 10, 0)).to.equal("GREEN");
  });

});


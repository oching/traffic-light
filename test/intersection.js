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

  it('should have East/West in GREEN at 2 minutes and 30 seconds', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('East/West', 2, 30)).to.equal("GREEN");
  });

  it('should have North/South in RED at 4 minutes and 30 seconds', function() {
    var intersection = new Intersection();
    
    expect(intersection.showTrafficLightState('North/South', 4, 30)).to.equal("RED");
  });
  
  it('should have East/West in YELLOW at 4 minutes and 30 seconds', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('East/West', 4, 30)).to.equal("YELLOW");
  });

  it('should have North/South in GREEN at 5 minutes', function() {
    var intersection = new Intersection();
        
    expect(intersection.showTrafficLightState('North/South', 5, 0)).to.equal("GREEN");
  });

  it('should have East/West in RED at 5 minutes', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('East/West', 5, 0)).to.equal("RED");
  }); 

  it('should have North/South in GREEN at 6 minutes and 45 seconds', function() {
    var intersection = new Intersection();
    
    expect(intersection.showTrafficLightState('North/South', 6, 45)).to.equal("GREEN");
  });

  it('should have East/West in RED at 6 minutes and 45 seconds', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('East/West', 6, 45)).to.equal("RED");
  });

  it('should have North/South in YELLOW at 9 minutes and 30 seconds', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('North/South', 9, 30)).to.equal("YELLOW");
  });

  it('should have East/West in RED at 9 minutes and 30 seconds', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('East/West', 9, 30)).to.equal("RED");
  });
  
  it('should have North/South in RED at 10 minutes', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('North/South', 10, 0)).to.equal("RED");
  });

  it('should have East/West in GREEN at 10 minutes', function() {
    var intersection = new Intersection();

    expect(intersection.showTrafficLightState('East/West', 10, 0)).to.equal("GREEN");
  });

  it('should have North/South in YELLOW at 29 minutes 59 seconds', function() {
     var intersection = new Intersection();
     
     expect(intersection.showTrafficLightState('North/South', 29, 59)).to.equal("YELLOW");
  });

  it('should have East/West in RED at 29 minutes 59 seconds', function() {
     var intersection = new Intersection();
     
     expect(intersection.showTrafficLightState('East/West', 29, 59)).to.equal("RED");
  });

});


var chai = require('chai');
var expect = chai.expect;

var intersectionJs = require('../src/intersection');
var intersection = intersectionJs.Intersection;
var NS_DIRECTION = intersectionJs.NS_DIRECTION;
var EW_DIRECTION = intersectionJs.EW_DIRECTION;
var RED = intersectionJs.RED;
var GREEN = intersectionJs.GREEN;
var YELLOW = intersectionJs.YELLOW;


describe('Intersection', function() {
  
  it('should have North/South in RED as initial state', function() {
    var northSouthTrafficLight = intersection._trafficLights[0];

    expect(northSouthTrafficLight.direction).to.equal(NS_DIRECTION);
    expect(northSouthTrafficLight.state).to.equal(RED);
  });  

  it('should have East/West in GREEN as initial state', function() {
    var eastWestTrafficLight = intersection._trafficLights[1];

    expect(eastWestTrafficLight.direction).to.equal(EW_DIRECTION);
    expect(eastWestTrafficLight.state).to.equal(GREEN);
  });

  it('should have North/South in RED at 2 minutes', function() {
    expect(intersection.showTrafficLightState(NS_DIRECTION, 2, 0)).to.equal(RED);
  });

  it('should have East/West in GREEN at 2 minutes and 30 seconds', function() {
    expect(intersection.showTrafficLightState(EW_DIRECTION, 2, 30)).to.equal(GREEN);
  });

  it('should have North/South in RED at 4 minutes and 30 seconds', function() {
    expect(intersection.showTrafficLightState(NS_DIRECTION, 4, 30)).to.equal(RED);
  });
  
  it('should have East/West in YELLOW at 4 minutes and 30 seconds', function() {
    expect(intersection.showTrafficLightState(EW_DIRECTION, 4, 30)).to.equal(YELLOW);
  });

  it('should have North/South in GREEN at 5 minutes', function() {
    expect(intersection.showTrafficLightState(NS_DIRECTION, 5, 0)).to.equal(GREEN);
  });

  it('should have East/West in RED at 5 minutes', function() {
    expect(intersection.showTrafficLightState(EW_DIRECTION, 5, 0)).to.equal(RED);
  }); 

  it('should have North/South in GREEN at 6 minutes and 45 seconds', function() {
    expect(intersection.showTrafficLightState(NS_DIRECTION, 6, 45)).to.equal(GREEN);
  });

  it('should have East/West in RED at 6 minutes and 45 seconds', function() {
    expect(intersection.showTrafficLightState(EW_DIRECTION, 6, 45)).to.equal(RED);
  });

  it('should have North/South in YELLOW at 9 minutes and 30 seconds', function() {
    expect(intersection.showTrafficLightState(NS_DIRECTION, 9, 30)).to.equal(YELLOW);
  });

  it('should have East/West in RED at 9 minutes and 30 seconds', function() {
    expect(intersection.showTrafficLightState(EW_DIRECTION, 9, 30)).to.equal(RED);
  });
  
  it('should have North/South in RED at 10 minutes', function() {
    expect(intersection.showTrafficLightState(NS_DIRECTION, 10, 0)).to.equal(RED);
  });

  it('should have East/West in GREEN at 10 minutes', function() {
    expect(intersection.showTrafficLightState(EW_DIRECTION, 10, 0)).to.equal(GREEN);
  });

  it('should have North/South in YELLOW at 29 minutes 59 seconds', function() {
     expect(intersection.showTrafficLightState(NS_DIRECTION, 29, 59)).to.equal(YELLOW);
  });

  it('should have East/West in RED at 29 minutes 59 seconds', function() {
     expect(intersection.showTrafficLightState(EW_DIRECTION, 29, 59)).to.equal(RED);
  });

  it('should return a message if there is no traffic light at specified direction', function() {
     expect(intersection.showTrafficLightState("Southwest", 5, 0)).to.equal("No traffic light at specified direction.");
  });

});


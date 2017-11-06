const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let intervalId;

intervalId = elevator.start();

elevator.stop(intervalId);

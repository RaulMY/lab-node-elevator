const Elevator = require('./elevator.js');
const Person  = require('./person.js');

const myElevator = new Elevator();
const oriana = new Person("Oriana", 1, 7);
const betsy = new Person("Betsy", 3, 7);
const dimitri = new Person("Dimitri", 7, 2);

myElevator.start();
myElevator.call(oriana);
myElevator.call(betsy);
myElevator.call(dimitri);
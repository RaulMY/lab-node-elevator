const Elevator = require('./elevator.js');
const Person  = require('./person.js');

const myElevator = new Elevator();
const oriana = new Person("Oriana", 1, 7);
const betsy = new Person("Betsy", 3, 2);
const dimitri = new Person("Dimitri", 7, 2);
const alicia = new Person("Alicia", 4, 8);
const alec = new Person("Alec", 10, 1);

myElevator.start();
myElevator.call(oriana);
myElevator.call(betsy);
myElevator.call(dimitri);
myElevator.call(alec);
setTimeout(() =>myElevator.call(alicia), 8000);
setTimeout(() =>myElevator.call(alec), 15000);
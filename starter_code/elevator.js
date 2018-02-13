class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers= [];
  }

  start() {
    this.interval = setInterval(() =>this.update(), 1000);
   }

  stop() { 
    clearInterval(this.interval);
  }

  update() { 
    this.log();
    this._passengersEnter();
    this._passengersLeave();
    this.requests.sort((a,b)=>{
      if (this.direction==="up"){
        if (a>this.floor && b >this.floor){
          return a-b
        } else if (a>this.floor && b <this.floor){
          return -1
        } else if (a<this.floor && b >this.floor){
          return 1;
        }
      } else {
        if (a<this.floor && b <this.floor){
          return b-a;
        } else if (a>this.floor && b <this.floor){
          return 1
        } else if (a<this.floor && b >this.floor){
          return -1;
        }
      }
    })
    console.log(this.requests)
    if (this.requests.length===0){
      this.stop();
    } else {
      if (this.requests[0]>this.floor){
        this.direction="up";
        this.floorUp();
      } else if (this.requests[0]<this.floor) {
        this.direction="down";
        this.floorDown();
      } 
    }
  }

  _passengersEnter() { 
    this.waitingList.forEach((passenger, index)=>{
      if (passenger.originFloor===this.floor){
        this.requests.splice(this.requests.indexOf(this.floor),1);
        this.passengers.push(passenger);
        this.requests.push(passenger.destinationFloor);
        console.log(`${passenger.name} has entered the Elevator`);
        this.waitingList.splice(index,1);
      }
    })
  }

  _passengersLeave(person, index) {
    this.passengers.forEach((passenger, index)=>{
      if (passenger.destinationFloor===this.floor){
        this.requests.splice(this.requests.indexOf(this.floor),1);
        console.log(`${passenger.name} has left the Elevator`);
        this.passengers.splice(index,1);
      }
    })   
   }

  floorUp() {
    if (this.floor<this.MAXFLOOR){
       this.floor++;
    }
    this.log()
   }

  floorDown() { 
    if (this.floor>0){
      this.floor--;
   }
   this.log()
  }

  call(person) { 
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

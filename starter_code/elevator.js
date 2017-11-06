class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests   = [];
    this.direction  = "up";
  }

  start() {
    return setInterval(() => {this.update();}, 1000);
  }

  stop(id) {
    setTimeout(() => {
      if (this.requests.length === 0) {
        clearInterval(id);
      }
    },4000);
  }

  update() {
    this.log();
  }

  _passengersEnter(person) {
    this.passengers.push(person);
    this.requests.push(person.destinationFloor);
    console.log(`${person.name} has enter the elevator.`);
  }

  _passengersLeave(person) {
    console.log(`${person.name} has left the elevator.`);
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR){
      this.floor = this.floor+1;
    }
    else{
      console.log("You are on the top floor");
      this.direction = "down";
    }

    let i;
    for (i=0; i < this.waitingList.length; i++){
      if(this.waitingList[i].originFloor == this.floor){
        this._passengersEnter(this.waitingList[i]);
        this.waitingList.splice(i,1);
      }
    }
    let j;
    for (j=0; j<this.passengers.length;j++){
      if(this.passengers[j].destinationFloor == this.floor){
        this._passengersLeave(this.passengers[j]);
        this.passengers.splice(j,1);
      }
    }
  }

  floorDown() {
    if (this.floor > 0){
      this.floor = this.floor-1;
    }
    else{
      console.log("You can't keep going down.");
      this.direction = "up";
    }
    let i;
    for (i=0; i < this.waitingList.length; i++){
      if(this.waitingList[i].originFloor == this.floor){
        this._passengersEnter(this.waitingList[i]);
        this.waitingList.splice(i,1);
      }
    }
    let j;
    for (j=0; j<this.passengers.length;j++){
      if(this.passengers[j].destinationFloor == this.floor){
        this._passengersLeave(this.passengers[j]);
        this.passengers.splice(j,1);
      }
    }
  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

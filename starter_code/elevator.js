class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
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
    });
  }

  update() {
    this.log();
  }

  _passengersEnter() { }

  _passengersLeave() { }

  floorUp() {
    if (this.floor < 10){
      this.floor = this.floor+1;
    }
    else{
      console.log("no vayas al cielo aun...");
    }
  }

  floorDown() {
    if (this.floor > 0){
      this.floor = this.floor-1;
    }
    else{
      console.log("no puedes ir al inframundo!");
    }
  }

  call() { }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

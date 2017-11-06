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
    setTimeout(() => {clearInterval(id);},10000);
  }

  update() {
    this.log();
  }

  _passengersEnter() { }

  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

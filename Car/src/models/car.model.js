class Car extends Gps{
  name;
  model;
  year;
  start;
  velocity;

  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.start = false;
    this.velocity = 0;
  }

  start() {
    this.start = true;
  }

  stop() {
    this.velocity = 0;
    this.start = false;
  }

  accelerate(velocity) {
    this.velocity = velocity;
  }
}

module.exports = { Car };

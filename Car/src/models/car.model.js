class Car {
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
    this.velocity = 0 + 'km'
  }

  startCar(start) {
    this.start = start;
  }

  stopCar() {
    this.velocity = 0;
  }

  accelerateCar(velocity) {
    this.velocity = velocity + 'km';
  }
}

module.exports = { Car };

const { Car } = require('../models/car.model');

class CarService {
  create(name, model, year) {
    const car = new Car(name, model, year);

    return car;
  }
}

module.exports = { CarService };

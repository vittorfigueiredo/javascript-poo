const { Car } = require('../models/car.model');

class CarController {
  newCar() {
    const car = new Car('Civic', 'Honda', 2021);

    return car;
  }
}

module.exports = { CarController };

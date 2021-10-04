const { CarController } = require('./controllers/car.controller');

const carController = new CarController();

console.log(carController.newCar());

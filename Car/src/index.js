const { CarService } = require('./services/car.service');

const carService = new CarService();

const name = ('Civic');
const model = ('Honda');
const year = (2021);

console.log(carService.create(name, model, year));

import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";

class CarsService {

    setActive(carId) {
        let foundCar = appState.cars.find(c => c.id == carId)
        console.log(foundCar);
        appState.activeCar = foundCar
    }

    createCar(formData) {
        // NOTE instantiate my Car class, and make a new 'Car' out of my formData object
        let newCar = new Car(formData)
        console.log('newCar', newCar);
        appState.cars.push(newCar)
        console.log(appState.cars);
        appState.emit('cars')
    }

}

export const carsService = new CarsService()
import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { saveState } from "../Utils/Store.js";

function _saveCars() {
    saveState('cars', appState.cars)
}

class CarsService {


    setActive(carId) {
        let foundCar = appState.cars.find(c => c.id == carId)
        console.log(foundCar);
        appState.activeCar = foundCar
    }

    createCar(formData) {
        // debugger
        // NOTE instantiate my Car class, and make a new 'Car' out of my formData object
        let newCar = new Car(formData)
        console.log('newCar', newCar);
        appState.cars.push(newCar)
        // saveState('cars', appState.cars)
        _saveCars()
        console.log(appState.cars);
        appState.emit('cars')
    }

    deleteCar(carId) {
        let carToDelete = appState.cars.find(c => c.id == carId)
        console.log('delete THAT CAR', carToDelete)
        // NOTE set the appstate.cars to an array of cars without the car that we deleted
        // NOTE FILTER OUT the car that we deleted
        appState.cars = appState.cars.filter(c => c.id != carId)
        _saveCars()
    }

}

export const carsService = new CarsService()
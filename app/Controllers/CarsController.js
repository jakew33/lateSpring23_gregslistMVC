
import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { carsService } from "../Services/CarsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawCars() {
    console.log('drawing cars');
    let cars = appState.cars
    // NOTE make sure your placeholder template is declared outside of the forEach
    let template = ''
    // NOTE for each car in the AppState, inject the cardTemplate into the placeholder
    cars.forEach(car => template += car.CardTemplate)
    setHTML('cars', template)
}

function _drawCreateCarButton() {
    setHTML('createCarButton', Car.CreateCarButton())
}

function _drawActive() {
    console.log('drawing active');
    let car = appState.activeCar
    setHTML('modal-guts', car.ActiveTemplate)
}

export class CarsController {
    constructor() {
        // console.log('hello from the cars controller');

        _drawCreateCarButton()
        // NOTE I'm listening to the activeCar in the AppState, and if it ever changes, I am going to redraw the ActiveTemplate
        appState.on('activeCar', _drawActive)
        appState.on('cars', _drawCars)
        appState.on('userName', _drawCreateCarButton)
    }

    // NOTE this is how we 'toggle' drawing cars to the page
    getCars() {
        // TODO note out the arguments for appstate.on
        _drawCars()
    }

    setActive(carId) {
        console.log('setting active', carId)
        carsService.setActive(carId)
    }

    getCarForm() {
        console.log('get the car form');
        setHTML('modal-guts', Car.CarForm())
    }

    createCar() {
        console.log('creating the car');
        // NOTE prevent the page from refreshing
        window.event.preventDefault()
        const formHTML = event.target
        console.log('this is the onsubmit event', formHTML);
        // NOTE getFormData grabs the inputs and the values and create a key:value pair
        // NOTE the inputs MUST have a 'name' attribute that matches whatever property you are trying to assign
        const formData = getFormData(formHTML)
        console.log('this is my formatted object from the form', formData);
        formData.creatorName = appState.userName
        carsService.createCar(formData)
        // @ts-ignore
        // NOTE this line clears the form
        formHTML.reset()
        // NOTE this closes the modal
        // NOTE DO NOT IMPORT BOOTSTRAP OR THIS WILL NOT WORK
        // @ts-ignore
        bootstrap.Modal.getOrCreateInstance('#modal').hide()
    }

    async deleteCar(carId) {
        console.log('delete that car', carId);
        if (await Pop.confirm("Are you sure about that?")) {
            carsService.deleteCar(carId)
        }
    }

}
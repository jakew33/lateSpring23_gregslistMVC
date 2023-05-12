import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";

function _saveHouses() {
    saveState('houses', appState.houses)
}

class CarsService {


    setActive(houseId) {
        let foundHouse = appState.houses.find(houses => houseId.id == houseId)
        console.log(foundHouse);
        appState.activeHouse = foundHouse
    }

  }

  export const housesService = new HousesService()
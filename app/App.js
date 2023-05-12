import { CarsController } from "./Controllers/CarsController.js";
import { UserController } from "./Controllers/UserController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { HousesController } from "./Controllers/HousesController.js"

class App {
  // valuesController = new ValuesController();

  carsController = new CarsController();

  userController = new UserController();
}

window["app"] = new App();

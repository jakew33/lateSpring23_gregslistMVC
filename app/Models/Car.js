import { generateId } from "../Utils/generateId.js"

export class Car {
    constructor(data) {
        // NOTE if 'data' does not have an id...default to generate one
        this.id = data.id || generateId()
        this.make = data.make
        this.year = data.year
        this.model = data.model
        this.price = data.price
        this.description = data.description
        this.color = data.color
        this.img = data.img
    }


    static CarForm() {
        return /*html*/ `<div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">List Car</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form onsubmit="app.carsController.createCar()">
          <div class="modal-body container-fluid">
            <section class="row">
              <div class="mb-3 col-6">
                <label for="make" class="form-label">Car Make</label>
                <input required minlength="3" maxlength="20" type="text" class="form-control" id="make" name="make"
                  placeholder="Car Make">
              </div>
              <div class="mb-3 col-6">
                <label for="model" class="form-label">Car Model</label>
                <input required minlength="3" maxlength="20" type="text" class="form-control" id="model" name="model"
                  placeholder="Car Model">
              </div>
              <div class="mb-3 col-6">
                <label for="year" class="form-label">Car Year</label>
                <input required min="1920" type="number" class="form-control" id="year" name="year"  placeholder="Car Year">
              </div>
              <div class="mb-3 col-6">
                <label for="price" class="form-label">Car Price</label>
                <input required min="2000" max="1000000" type="number" class="form-control" id="price" name="price"
                  placeholder="Car Price">
              </div>
              <div class="mb-3 col-12">
                <label for="description" class="form-label">Car Description</label>
                <input required minlength="3" maxlength="50" type="text" class="form-control" id="description" name="description"
                  placeholder="Car Description">
              </div>
              <div class="mb-3 col-12">
                <label for="color" class="form-label">Car Color</label>
                <input required type="color" class="form-control" id="color" name="color" placeholder="Car Color">
              </div>
              <div class="mb-3 col-12">
                <label for="img" class="form-label">Car Image</label>
                <input required type="text" class="form-control" id="img" name="img" placeholder="Car Image">
              </div>
            </section>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Create Listing</button>
          </div>
        </form>`
    }

    // NOTE getters are essentially additonal properties and we can access them with dot notation
    get CardTemplate() {
        return `
      <div class="col-md-4 col-12">
        <div onclick="app.carsController.setActive('${this.id}')" class="rounded elevation-5 selectable" data-bs-toggle="modal" data-bs-target="#modal">
          <img class="rounded-top"
            src="${this.img}"
            alt="${this.make, this.model}">
          <div class="d-flex justify-content-between px-2">
            <p>${this.make, this.model}</p>
            <p>$${this.price}</p>
          </div>
        </div>
      </div>`
    }

    get ActiveTemplate() {
        return /*html */`   
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${this.make} ${this.model}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body container-fluid">
          <section class="row">
            <div class="col-md-6">
              <img
                src="${this.img}"
                alt="">
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-around">
                <p>${this.year}</p>
                <p>$${this.price}</p>
              </div>
              <p>${this.description}</p>
            </div>
          </section>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Contact Seller</button>
        </div>`
    }

}
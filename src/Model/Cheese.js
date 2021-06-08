import { isString, isInt, isFloat } from './../Utils/Validation.js';

export class Cheese {

    constructor(id, name, description, price, quantity, image = "") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }

    isValid() {
        if (!isInt(this.id))
            return false;
        if (!isString(this.name) || this.name.length <= 0)
            return false;
        if (!isString(this.description) || this.description.length <= 0)
            return false;
        if (!isFloat(this.price) || this.price < 0.0)
            return false;
        if (!isInt(this.quantity) || this.quantity < 0)
            return false;
        if (!isString(this.image))
            return false;
        return true;
    }

}
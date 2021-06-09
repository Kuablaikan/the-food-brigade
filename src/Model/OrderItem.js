import { isInt, isFloat } from './../Utils/Validation.js';

export class OrderItem {

    constructor(id, orderId, cheeseId, quantity, price) {
        this.id = id;
        this.orderId = orderId;
        this.cheeseId = cheeseId;
        this.quantity = quantity;
        this.price = price;
    }

    isValid() {
        if (!isInt(this.id))
            return false;
        if (!isInt(this.orderId))
            return false;
        if (!isInt(this.cheeseId))
            return false;
        if (!isInt(this.quantity) || this.quantity < 0)
            return false;
        if (!isFloat(this.price) || this.price < 0.0)
            return false;
        return true;
    }

}

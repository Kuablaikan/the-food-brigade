import { isInt } from './../Utils/Validation.js';

export class CartItem {

    constructor(id, userId, cheeseId, quantity) {
        this.id = id;
        this.userId = userId;
        this.cheeseId = cheeseId;
        this.quantity = quantity;
    }

    isValid() {
        if (!isInt(this.id))
            return false;
        if (!isInt(this.userId))
            return false;
        if (!isInt(this.cheeseId))
            return false;
        if (!isInt(this.quantity) || this.quantity < 0)
            return false;
        return true;
    }

}
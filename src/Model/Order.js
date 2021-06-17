<<<<<<< Updated upstream
import { isString, isInt } from './../Utils/Validation.js';

export class Order {

    constructor(id, userId, buyerName, address) {
=======
import { isString, isInt, isDate } from './../Utils/Validation.js';

export class Order {

    constructor(id, userId, buyerName, address, created = new Date()) {
>>>>>>> Stashed changes
        this.id = id;
        this.userId = userId;
        this.buyerName = buyerName;
        this.address = address;
<<<<<<< Updated upstream
=======
        this.created = created;
>>>>>>> Stashed changes
    }

    isValid() {
        if (!isInt(this.id))
            return false;
        if (!isInt(this.userId))
            return false;
        if (!isString(this.buyerName) || this.buyerName.length <= 0)
            return false;
        if (!isString(this.address) || this.address.length <= 0)
            return false;
<<<<<<< Updated upstream
=======
        if (!isDate(this.created))
            return false;
>>>>>>> Stashed changes
        return true;
    }

}

import { isString, isInt } from './../Utils/Validation.js';

export class User {

    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    isValid() {
        if (!isInt(this.id))
            return false;
        if (!isString(this.username) || this.username.length <= 0)
            return false;
        if (!isString(this.password) || this.password.length <= 0)
            return false;
        return true;
    }

}

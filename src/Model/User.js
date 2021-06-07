export class User {

    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    isValid() {
        if (typeof this.id !== "number" || this.id === null || isNaN(this.price) || !isFinite(this.price) || (this.price | 0) !== this.price)
            return false;
        if (typeof this.username !== "string" || this.username === null || this.username.length <= 0)
            return false;
        if (typeof this.password !== "string" || this.password === null || this.password.length <= 0)
            return false;
        return true;
    }

}

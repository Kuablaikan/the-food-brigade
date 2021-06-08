import { User } from './../Model/User.js';
import { Service } from './Service.js';

export class UserService {

    static getAll() {
        return Service.readList("users").map((user) => {
            return new User(parseInt(user.id), user.username, user.password);
        });
    }

    static getById(id) {
        const user = this.getAll().find((user) => { return user.id === id; });
        if (!user)
            return null;
        return user;
    }

    static getByUsername(username) {
        const user = this.getAll().find((user) => { return user.username === username; });
        if (!user)
            return null;
        return user;
    }

    static save(usersToSave) {
        if (!Array.isArray(usersToSave))
            usersToSave = [usersToSave];
        let users = this.getAll();
        usersToSave.forEach((user) => {
            const index = users.findIndex((aux) => { return aux.id === user.id; });
            const userObj = new User(parseInt(user.id), user.username, user.password);
            if (index >= 0)
                users[index] = userObj;
            else
                users.push(userObj);
        });
        Service.writeList("users", users);
    }

    static delete(usersToDelete) {
        if (!Array.isArray(usersToDelete))
            usersToDelete = [usersToDelete];
        let users = this.getAll();
        usersToDelete.forEach((user) => {
            const index = users.findIndex((aux) => { return aux.id === user.id; });
            if (index >= 0)
                users.splice(index, 1);
        });
        Service.writeList("users", users);
    }

}

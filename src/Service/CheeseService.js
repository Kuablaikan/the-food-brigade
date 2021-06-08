import { Cheese } from './../Model/Cheese.js';
import { Service } from './Service.js';

export class CheeseService {

    static getAll() {
        return Service.readList("cheeses").map((cheese) => {
            return new Cheese(parseInt(cheese.id), cheese.name, cheese.description, parseFloat(cheese.price), parseInt(cheese.quantity), cheese.image);
        });
    }

    static save(cheesesToSave) {
        if (!Array.isArray(cheesesToSave))
            cheesesToSave = [cheesesToSave];
        let cheeses = this.getAll();
        cheesesToSave.forEach((cheese) => {
            const index = cheeses.findIndex((aux) => { return aux.id === cheese.id; });
            const cheeseObj = new Cheese(parseInt(cheese.id), cheese.name, cheese.description, parseFloat(cheese.price), parseInt(cheese.quantity), cheese.image);
            if (index >= 0)
                cheeses[index] = cheeseObj;
            else
                cheeses.push(cheeseObj);
        });
        Service.writeList("cheeses", cheeses);
    }

    static delete(cheesesToDelete) {
        if (!Array.isArray(cheesesToDelete))
            cheesesToDelete = [cheesesToDelete];
        let cheeses = this.getAll();
        cheesesToDelete.forEach((cheese) => {
            const index = cheeses.findIndex((aux) => { return aux.id === cheese.id; });
            if (index >= 0)
                cheeses.splice(index, 1);
        });
        Service.writeList("cheeses", cheeses);
    }

}

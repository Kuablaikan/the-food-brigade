import { Order } from './../Model/Order.js';
import { Service } from './Service.js';

export class OrderService {

    static getAll() {
        return Service.readList("orders").map((order) => {
            return new Order(parseInt(order.id), parseInt(order.userId), order.buyerName, order.address, new Date(order.created));
        });
    }

    static getById(id) {
        const order = this.getAll().find((order) => { return order.id === id; });
        if (!order)
            return null;
        return order;
    }

    static getByUserId(userId) {
        const orders = this.getAll().filter((order) => { return order.userId === userId; });
        if (!orders)
            return [];
        return orders;
    }

    static save(ordersToSave) {
        if (!Array.isArray(ordersToSave))
            ordersToSave = [ordersToSave];
        let orders = this.getAll();
        ordersToSave.forEach((order) => {
            const index = orders.findIndex((aux) => { return aux.id === order.id; });
            const orderObj = new Order(parseInt(order.id), parseInt(order.userId), order.buyerName, order.address, new Date(order.created));
            if (index >= 0)
                orders[index] = orderObj;
            else
                orders.push(orderObj);
        });
        Service.writeList("orders", orders);
    }

    static delete(ordersToDelete) {
        if (!Array.isArray(ordersToDelete))
            ordersToDelete = [ordersToDelete];
        let orders = this.getAll();
        ordersToDelete.forEach((order) => {
            const index = orders.findIndex((aux) => { return aux.id === order.id; });
            if (index >= 0)
                orders.splice(index, 1);
        });
        Service.writeList("orders", orders);
    }

}

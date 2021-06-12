import { OrderItem } from './../Model/OrderItem.js';
import { Service } from './Service.js';

export class OrderItemService {

    static getAll() {
        return Service.readList("order_items").map((orderItem) => {
            return new OrderItem(parseInt(orderItem.id), parseInt(orderItem.orderId), parseInt(orderItem.cheeseId), parseInt(orderItem.quantity), parseInt(orderItem.price));
        });
    }

    static getById(id) {
        const orderItem = this.getAll().find((orderItem) => { return orderItem.id === id; });
        if (!orderItem)
            return null;
        return orderItem;
    }

    static getByOrderId(orderId) {
        const orderItems = this.getAll().filter((orderItem) => { return orderItem.orderId === orderId; });
        if (!orderItems)
            return [];
        return orderItems;
    }

    static save(orderItemsToSave) {
        if (!Array.isArray(orderItemsToSave))
            orderItemsToSave = [orderItemsToSave];
        let orderItems = this.getAll();
        orderItemsToSave.forEach((orderItem) => {
            const index = orderItems.findIndex((aux) => { return aux.id === orderItem.id; });
            const orderItemObj = new OrderItem(parseInt(orderItem.id), parseInt(orderItem.orderId), parseInt(orderItem.cheeseId), parseInt(orderItem.quantity), parseInt(orderItem.price));
            if (index >= 0)
                orderItems[index] = orderItemObj;
            else
                orderItems.push(orderItemObj);
        });
        Service.writeList("order_items", orderItems);
    }

    static delete(orderItemsToDelete) {
        if (!Array.isArray(orderItemsToDelete))
            orderItemsToDelete = [orderItemsToDelete];
        let orderItems = this.getAll();
        orderItemsToDelete.forEach((orderItem) => {
            const index = orderItems.findIndex((aux) => { return aux.id === orderItem.id; });
            if (index >= 0)
                orderItems.splice(index, 1);
        });
        Service.writeList("order_items", orderItems);
    }

}

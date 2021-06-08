import { CartItem } from './../Model/CartItem.js';
import { Service } from './Service.js';

export class CartItemService {

    static getAll() {
        return Service.readList("cart_items").map((cartItem) => {
            return new CartItem(parseInt(cartItem.id), parseInt(cartItem.userId), parseInt(cartItem.cheeseId), parseInt(cartItem.quantity));
        });
    }

    static getById(id) {
        const cartItem = this.getAll().find((cartItem) => { return cartItem.id === id; });
        if (!cartItem)
            return null;
        return cartItem;
    }

    static getByUserId(userId) {
        const cartItems = this.getAll().filter((cartItem) => { return cartItem.userId === userId; });
        if (!cartItems)
            return [];
        return cartItems;
    }

    static save(cartItemsToSave) {
        if (!Array.isArray(cartItemsToSave))
            cartItemsToSave = [cartItemsToSave];
        let cartItems = this.getAll();
        cartItemsToSave.forEach((cartItem) => {
            const index = cartItems.findIndex((aux) => { return aux.id === cartItem.id; });
            const cartItemObj = new CartItem(parseInt(cartItem.id), parseInt(cartItem.userId), parseInt(cartItem.cheeseId), parseInt(cartItem.quantity));
            if (index >= 0)
                cartItems[index] = cartItemObj;
            else
                cartItems.push(cartItemObj);
        });
        Service.writeList("cart_items", cartItems);
    }

    static delete(cartItemsToDelete) {
        if (!Array.isArray(cartItemsToDelete))
            cartItemsToDelete = [cartItemsToDelete];
        let cartItems = this.getAll();
        cartItemsToDelete.forEach((cartItem) => {
            const index = cartItems.findIndex((aux) => { return aux.id === cartItem.id; });
            if (index >= 0)
                cartItems.splice(index, 1);
        });
        Service.writeList("cart_items", cartItems);
    }

}

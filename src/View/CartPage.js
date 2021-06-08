import { Content } from "./Content.js";

export function InitPage(cartItems, cartObject,  onBuyUrlParam){
    const before = `<ul class="products">`;
    const after = `</ul>`;
    
    let productsHTML = "";
    let html = "";
    let sumPrice = 0;
    let sumCount = 0;
    let buttonIds = [];
    
    const cartPage = new Content();
    cartPage.Init("main");

    for(let i in cartItems)
    {
        sumPrice += cartItems[i].price * cartObject[i].quantity;
        sumCount += cartObject[i].quantity;
        html = `<li class="preview"><img src=${cartItems[i].image} alt=${cartItems[i].name}><div><h3>${cartItems[i].name}</h3>
        <h4>${cartObject[i].quantity} db</h4><h4>Ár: ${cartItems[i].price * cartObject[i].quantity} Ft</h4></div><input id="${cartObject[i].id}" type="submit" value="Töröl"></li>>`;
        productsHTML += html;

        buttonIds[i] = cartObject[i].id;
    }
    let sumHtml = `<h3>Teljes összeg:</h3> <h4> ${sumPrice} Ft</h4> <h3>Tételek száma:</h3> <h4> ${sumCount} db</h4>
    <a href="${onBuyUrlParam}">Megrendel</a>`;

    
    cartPage.Show("Kosár","cart",before+productsHTML+after+sumHtml);
    cartPage.addButtonsByArrayOfIds(buttonIds);

    return cartPage;

}
import * as Abstract from "/the-food-brigade/src/View/content.js";

export function render(cartJson, onBuyUrlParam){
    const before = `<ul class="products">`;
    const after = `</ul>`;
    
    let productsHTML = "";
    let html = "";
    let sumPrice = 0;
    let sumCount = 0;
    
    for(let i in cartJson)
    {
        sumPrice += cartJson[i].cheese_price * cartJson[i].cheese_count;
        sumCount += cartJson[i].cheese_count;
        html = `<li class="preview"><img src=${cartJson[i].cheese_image} alt=${cartJson[i].cheese_name}><div><h3>${cartJson[i].cheese_name}</h3>
        <h4>${cartJson[i].cheese_count} db</h4><h4>Ár: ${cartJson[i].cheese_price * cartJson[i].cheese_count} Ft</h4></div><input id="cart" type="submit" value="Töröl"></li>>`;
        productsHTML += html;
    }
    let sumHtml = `<h3>Teljes összeg:</h3> <h4> ${sumPrice} Ft</h4> <h3>Tételek száma:</h3> <h4> ${sumCount} db</h4>
    <a href="${onBuyUrlParam}">Megrendel</a>`;

    let mainPage = new Abstract.Content();
    mainPage.init("main");
    mainPage.clear();
    mainPage.show("Kosár","cart",before+productsHTML+after+sumHtml);

}
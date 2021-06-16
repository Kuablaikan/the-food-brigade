import { Content } from "./Content.js";

class offers extends Content {
    Show(title, contentHTML) {
        this.page.innerHTML = `<h2>${title}</h2>${contentHTML}`;
    }
}

export function InitPage(cheeseList, chosen) {
    const before = `<div class="product">`;
    const after = `</div>`;
    const beforeu = `<ul class="products">`;
    const afteru = `</ul>`;
    let productsHTML = "";
    let product = "";
    let Offers = "";
    let html = "";
    let buttonIds = [];
    let randOfferF = Math.floor(Math.random() * (cheeseList.length - 1));
    let randOfferS = Math.floor(Math.random() * (cheeseList.length - 1));
    let randOfferT = Math.floor(Math.random() * (cheeseList.length - 1));

    const mainPage = new offers("offer");
    mainPage.Init("main");


    
      
        product = `<div class="Watch"><img  name="${cheeseList[chosen].id}" src=${cheeseList[chosen].image} alt="${cheeseList[chosen].name} -ról készült kép"><div><h3>${cheeseList[chosen].name}</h3>
        <p>${cheeseList[chosen].description}</p><h4>Most csak: ${cheeseList[chosen].price} HUF</h4></div><input id=${cheeseList[chosen].id} type="submit" value="Kosárba" style="display:${sessionStorage.getItem('isLoggedIn') ? "inline-block" : "none"}"></div></div>`;
    productsHTML += product;
    productsHTML += beforeu;
    for (let i in cheeseList) {
        if (cheeseList[i].quantity >= 0 && (i == randOfferF || i == randOfferS || i == randOfferT) && i != chosen)
            continue;
        html = `<li class="preview" style="color: #000000; font-size: 25px;"><img  name="${cheeseList[i].id}" src=${cheeseList[i].image} alt="${cheeseList[i].name} -ról készült kép"><div><h3>${cheeseList[i].name}</h3>
        <p>${cheeseList[i].description}</p><h4>Ár: ${cheeseList[i].price} HUF</h4></div><input id=${cheeseList[i].id} type="submit" value="Kosárba" style="display:${sessionStorage.getItem('isLoggedIn') ? "inline-block" : "none"}"></li>`;
        productsHTML += html;

        buttonIds[i] = cheeseList[i].id;
    }
     
    productsHTML += afteru;
        
        

        buttonIds[chosen] = cheeseList[chosen].id;
    

    mainPage.Show(before + productsHTML, "");
    mainPage.addButtonsByArrayOfIds(buttonIds);

    return mainPage;
}

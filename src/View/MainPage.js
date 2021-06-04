import * as Abstract from "/the-food-brigade/src/View/content.js";

class MainPage extends Abstract.Content
{
    constructor (type){
        super();
        this.type = type;
    }

    show(title,contentHTML){
        this.page.innerHTML = `<h2>${title} (${this.type})</h2>${contentHTML}`;
    }
    
}

 export function Render(cheeseList){
    const before = `<ul class="products">`;
    const after = `</ul>`;
    let productsHTML = "";
    let html = "";
    //let cheese = cheeseList;
    
    for(let i in cheeseList)
    {
        html = `<li class="preview"><img src=${cheeseList[i].cheese_image} alt=${cheeseList[i].cheese_name}><div><h3>${cheeseList[i].cheese_name}</h3>
        <p>${cheeseList[i].cheese_description}</p><h4>Ár: ${cheeseList[i].cheese_price} HUF</h4></div><input id="cart" name=${"cheeseListTest.cheese_type_id"} type="submit" value="Kosárba"></li>>`;
        productsHTML += html;
    }

    let mainPage = new MainPage("MainPage");
    mainPage.init("main");
    mainPage.clear();
    mainPage.show("Sajtok", before+productsHTML+after);
}


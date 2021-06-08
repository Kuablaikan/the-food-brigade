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

 export function render(cheeseList){
    const before = `<ul class="products">`;
    const after = `</ul>`;
    let productsHTML = "";
    let html = "";
    //let cheese = cheeseList;
    
    for(let i in cheeseList)
    {
        html = `<li class="preview"><img src=${cheeseList[i].image} alt="${cheeseList[i].name} -ról készült kép"><div><h3>${cheeseList[i].name}</h3>
        <p>${cheeseList[i].description}</p><h4>Ár: ${cheeseList[i].price} HUF</h4></div><input id="${cheeseList[i].id}" name=${"cheeseListTest.cheese_type_id"} type="submit" value="Kosárba"></li>>`;
        productsHTML += html;
    }

    let mainPage = new MainPage("MainPage");
    mainPage.init("main");
    mainPage.clear();
    mainPage.show("Sajtok", before+productsHTML+after);
}


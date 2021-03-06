import { Content } from "./Content.js";

class MainPage extends Content
{
    Show(title,contentHTML){
        this.page.innerHTML = `<h2>${title}</h2>${contentHTML}`;
    } 
}

 export function InitPage(cheeseList){
    const before = `<ul class="products">`;
    const after = `</ul>`;
    let productsHTML = "";
    let html = "";
    //Temporaly ids for buttons
    let buttonIds = [];
    
    const mainPage = new MainPage("MainPage");
    mainPage.Init("main");
    

    for(let i in cheeseList)
    {
        if (cheeseList[i].quantity <= 0)
            continue;
        html = `<li class="preview"><img  name="${cheeseList[i].id}" src=${cheeseList[i].image} alt="${cheeseList[i].name} -ról készült kép"><div><h3>${cheeseList[i].name}</h3>
        <p>${cheeseList[i].description}</p><h4>Ár: ${cheeseList[i].price} HUF</h4></div><input id=${cheeseList[i].id} type="submit" value="Kosárba" style="display:${sessionStorage.getItem('isLoggedIn') ? "inline-block" : "none"}"></li>`;
        productsHTML += html;

        buttonIds[i] = cheeseList[i].id;
    }
    
    mainPage.Show('<input id="test" type=button value="TESZT ADATOK"><br>Sajtok', before+productsHTML+after);
    mainPage.addButtonsByArrayOfIds(buttonIds);

    return mainPage;
}


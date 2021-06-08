import { Content } from "/the-food-brigade/src/View/content.js"; //EZ AZ IMPORT CSAK A SZEMLÉLTETÉS MIATT KELL
import * as Nav from "/the-food-brigade/src/View/Navigation.js";
import * as MainPage from "/the-food-brigade/src/View/MainPage.js";
import * as EmptyPage from "/the-food-brigade/src/View/EmptyPage.js";
import * as LoginPage from "/the-food-brigade/src/View/LoginPage.js";
import * as CartPage from "/the-food-brigade/src/View/CartPage.js";
import * as SuccessPage from "/the-food-brigade/src/View/SuccessPage.js";

import { CheeseService } from "./../Service/CheeseService.js";

//aktuális oldal(tartalom szempontjából)
let currPage;
let currButtons = [];
let currList;

//Navigáció
Nav.InitPage();

//KB ilyen JSON-t vár a listázás és a kosár is, be Kosárhoz szükség van a countra PLACEHOLDER
let cheeseListTest = {
    0:{
        id:0,
        image:"img/chedar.jpg",
        nname:"chedar sajt",
        description: "Lorem ipsum dolor sit...",
        price:15000,
        count: 5},
    1:{
        id:1,
        image:"img/gouda.jpg",
        name:"Gouda sajt",
        description: "Lorem ipsum dolor sit...",
        price:125000,
        count: 2},
    15:{
        id:15,
        image:"img/bluecheese.jpg",
        name:"Kéksajt sajt",
        description: "Lorem ipsum dolor sit...",
        price:120,
        count: 1},
    2222:{
        id:2222,
        image:"img/trapista.jpg",
        name:"Trappista sajt",
        description: "Lorem ipsum dolor sit...",
        price:500,
        count: 110}
    };

//Teszt sajt
let cheeseListTest2 = {
        id:2,
        image:"img/chedar.jpg",
        name:"chedar sajt másik id-vel",
        description: "Lorem ipsum dolor sit...",
        price:15000,
        quantity: 10
    };

//Teszt sajt feltöltése
CheeseService.save(cheeseListTest2);    

//IDEIGLENES PAGE CHECK csak a szemléltetés végett KB ilyen logikával müködik. Ha rá hivuk egy InitPageelést akkor eltünik az aktuális tartalom. (Kivéve a navnál persze)
let param = Content.getUrlParam();
if (param === 'home' || param === null)
{
    currList = CheeseService.getAll();
    currPage = MainPage.InitPage(currList);
    currButtons = currPage.getButtons();

    for (let i = 0; i < currButtons.length; i++)
    {
        currButtons[i].onclick = function(evt)
        {
            evt.preventDefault();
            console.log(`Clicked: ${currButtons[i].id}`);
        }
    }

}
else if(param === 'login')
{
    
    currPage = LoginPage.InitPage('login');
    //currPage.setElementById('login2'); ha szükséges felülírni
    let loginBtn = currPage.selectedElement;
    loginBtn.onclick = function(evt)
    {
        evt.preventDefault();

        var input = 
                    {
                        username: document.getElementById('username').value,
                        password: document.getElementById('password').value
                    };
        console.log(input);

        if(login) //check is not null
        {
            /*if(validáció)
            {
                login();
            }
            else fail();
            */
            console.log("click");
        }
    }
}
else if(param === 'cart')
{
    //2. string paraméterel beállítható egy navigáció vagy bármi más ha szükséges
    currPage = CartPage.InitPage(cheeseListTest, "?page=success");
}
else if(param === 'success')
{
    currPage = SuccessPage.InitPage();
}
else
{
    currPage = EmptyPage.InitPage();
}






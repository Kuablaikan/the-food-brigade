import * as Abstract from "/the-food-brigade/src/View/content.js"; //EZ AZ IMPORT CSAK A SZEMLÉLTETÉS MIATT KELL
import * as Nav from "/the-food-brigade/src/View/Navigation.js";
import * as MainPage from "/the-food-brigade/src/View/MainPage.js";
import * as EmptyPage from "/the-food-brigade/src/View/EmptyPage.js";
import * as LoginPage from "/the-food-brigade/src/View/LoginPage.js";
import * as CartPage from "/the-food-brigade/src/View/CartPage.js";
import * as SuccessPage from "/the-food-brigade/src/View/SuccessPage.js";

//Navigáció
Nav.render();

//KB ilyen JSON-t vár a listázás és a kosár is, be Kosárhoz szükség van a countra
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
        count: 110}};

//IDEIGLENES PAGE CHECK csak a szemléltetés végett KB ilyen logikával müködik. Ha rá hivuk egy renderelést akkor eltünik az aktuális tartalom. (Kivéve a navnál persze)
let param = Abstract.Content.getUrlParam();
if (param === 'home' || param === null)
{
    MainPage.render(cheeseListTest);
}
else if(param === 'login')
{
    //renderelés vissza adja a login buttont, ehez tudunk onclick eseményt adni pl.:
    let login = LoginPage.render();
    login.onclick = function(evt){
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
    CartPage.render(cheeseListTest, "?page=success");
}
else if(param === 'success')
{
    SuccessPage.render();
}
else
{
    EmptyPage.render();
}






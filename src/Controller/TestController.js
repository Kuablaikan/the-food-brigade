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
        cheese_image:"img/chedar.jpg",
        cheese_name:"chedar sajt",
        cheese_description: "Lorem ipsum dolor sit...",
        cheese_price:15000,
        cheese_count: 5},
    1:{
        cheese_image:"img/gouda.jpg",
        cheese_name:"Gouda sajt",
        cheese_description: "Lorem ipsum dolor sit...",
        cheese_price:125000,
        cheese_count: 2},
    15:{
        cheese_image:"img/bluecheese.jpg",
        cheese_name:"Kéksajt sajt",
        cheese_description: "Lorem ipsum dolor sit...",
        cheese_price:120,
        cheese_count: 1},
    2222:{
        cheese_image:"img/trapista.jpg",
        cheese_name:"Trappista sajt",
        cheese_description: "Lorem ipsum dolor sit...",
        cheese_price:500,
        cheese_count: 110}};

//IDEIGLENES PAGE CHECK csak a szemléltetés végett KB ilyen logikával müködik. Ha rá hivuk egy renderelést akkor eltünik az aktuális tartalom. (Kivéve a navnál persze)
let param = Abstract.Content.getUrlParam();
if (param === 'home' || param === null)
{
    MainPage.render(cheeseListTest);
}
else if(param === 'login')
{
    LoginPage.render();
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






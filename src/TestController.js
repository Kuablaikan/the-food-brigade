import * as Abstract from "/the-food-brigade/src/View/content.js"; //EZ AZ IMPORT CSAK A SZEMLÉLTETÉS MIATT KELL
import * as Nav from "/the-food-brigade/src/View/Navigation.js";
import * as MainPage from "/the-food-brigade/src/View/MainPage.js";
import * as EmptyPage from "/the-food-brigade/src/View/EmptyPage.js";
import * as LoginPage from "/the-food-brigade/src/View/LoginPage.js";

Nav.render();

//KB ilyen JSON-t vár be
let cheeseListTest = {
    0:{
    cheese_image:"img/chedar.jpg",
    cheese_name:"chedar sajt",
    cheese_description: "Lorem ipsum dolor sit...",
    cheese_price:15000},
    1:{
        cheese_image:"img/gouda.jpg",
        cheese_name:"Gouda sajt",
        cheese_description: "Lorem ipsum dolor sit...",
        cheese_price:125000}};

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
else
{
    EmptyPage.render();
}






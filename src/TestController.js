import * as Nav from "/the-food-brigade/src/View/Navigation.js";
import * as MainPage from "/the-food-brigade/src/View/MainPage.js";

Nav.Render();

//KB ilyen JSON-t vár be
let cheeseListTest = {0:{
    cheese_image:"img/chedar.jpg",
    cheese_name:"chedar sajt",
    cheese_description: "Lorem ipsum dolor sit...",
    cheese_price:15000}};


MainPage.Render(cheeseListTest);





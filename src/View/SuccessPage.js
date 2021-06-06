import * as Abstract from "/the-food-brigade/src/View/content.js";

export function render(){

    let html = "";

    let loginPage = new Abstract.Content();
    loginPage.init("main");
    loginPage.show("Köszönjük a rendelését! ","", html);
}
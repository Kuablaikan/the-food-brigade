import * as Abstract from "/the-food-brigade/src/View/content.js";

export function render(){

    let html = "<p>Itt lesz a login</p>";

    let loginPage = new Abstract.Content();
    loginPage.init("main");
    loginPage.show("Login ","red", html);
}

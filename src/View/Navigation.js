import * as Abstract from "/the-food-brigade/src/View/content.js";

 export function render(){
    let param = Abstract.Content.getUrlParam();

    const before = `<ul class="centerBox"> `;
    const beforeFooter = `<ul class="navBar">`;
    const after = `</ul>`;
    let navBar = "";
    if(param !== "home" && param !== null)
    {
        navBar += `<li><a href="?page=home">Főoldal</a></li>`;
    }
    if(param !== "login" )
    {
        navBar += `<li><a href="?page=login">Login</a></li>`;
    }                

    var navigationBar = new Abstract.Content();
    navigationBar.init("nav");
    navigationBar.clear();
    navigationBar.show("","",before+navBar+after);
    
    var footerNavigation = new Abstract.Content();
    footerNavigation.init("footer");
    footerNavigation.clear();
    footerNavigation.show("","",beforeFooter+navBar+after);
}
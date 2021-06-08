import { Content } from "/the-food-brigade/src/View/content.js";

 export function InitPage(){
    let param = Content.getUrlParam();

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
    if(param !== "cart" )
    {
        navBar += `<li><a href="?page=cart">Cart</a></li>`;
    }                

    var navigationBar = new Content();
    navigationBar.Init("nav");
    navigationBar.Clear();
    navigationBar.Show("","",before+navBar+after);
    
    var footerNavigation = new Content();
    footerNavigation.Init("footer");
    footerNavigation.Clear();
    footerNavigation.Show("","",beforeFooter+navBar+after);
}
import { Content } from "./Content.js";

 export function InitPage(isLoggedIn){
    let param = Content.getUrlParam();

    const before = `<ul class="centerBox"> `;
    const beforeFooter = `<ul class="navBar">`;
    const after = `</ul>`;
    let navBar = "";
    if(param !== "home" && param !== null)
    {
        navBar += `<li><a href="?page=home">Főoldal</a></li>`;
    }
    if(param !== "login"  && !isLoggedIn)
    {
        navBar += `<li><a href="?page=login">Login</a></li>`;
    }
    if(isLoggedIn)
    {
        navBar += `<li><a name="logout" href="?page=home">Logout</a></li>`
    }
    if(param !== "cart" && isLoggedIn)
    {
        navBar += `<li><a href="?page=cart">Cart</a></li>`;
    }
             

    const navigationBar = new Content();
    navigationBar.Init("nav");
    navigationBar.Show("","",before+navBar+after);
    if(isLoggedIn)
    {
        navigationBar.setElementByName('logout',0);
    }
    
    
    const footerNavigation = new Content();
    footerNavigation.Init("footer");
    footerNavigation.Show("","",beforeFooter+navBar+after);
    if(isLoggedIn)
    {
        footerNavigation.setElementByName('logout',1);
    }

    return { navigationBar, footerNavigation };

}
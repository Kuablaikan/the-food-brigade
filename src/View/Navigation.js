import { Content } from "./Content.js";

class Nav extends Content
{
    setButtonOnClick(logOutFunction)
    {
        this.selectedElement.onclick = function(evt)
        {
            evt.preventDefault();
            console.log(Content.getUrlParam);
            if(Content.getUrlParam !== "home") location.href="?page=home";
            logOutFunction();
        }
    }
}


 export function InitPage(isLoggedIn, logOutFunction){
    let param = Content.getUrlParam();

    const before = `<ul class="centerBox"> `;
    const beforeFooter = `<ul class="navBar">`;
    const after = `</ul>`;
    let navBar = "";
    if(param !== "home" && param !== null)
    {
        navBar += `<li><a href="?page=home">Főoldal</a></li>`;
    }
    if(param !== "register" && !isLoggedIn)
    {
        navBar += `<li><a href="?page=register">Register</a></li>`;
    }
    if(param !== "login"  && !isLoggedIn)
    {
        navBar += `<li><a href="?page=login">Login</a></li>`;
    }
    if(param !== "cart" && isLoggedIn)
    {
        navBar += `<li><a href="?page=cart">Cart</a></li>`;
    }
    if(isLoggedIn)
    {
        navBar += `<li><a name="myOrders" href="?page=myOrders">My orders</a></li>`
    }
    if (param !== "stat")
    {
        navBar += `<li><a name="Stat" href="?page=stat">Statistics</a></li>`
    }
    if(isLoggedIn)
    {
        navBar += `<li><a name="logout" href="">Logout</a></li>`
    }
    
             

    const navigationBar = new Nav();
    navigationBar.Init("nav");
    navigationBar.Show("","",before+navBar+after);
    if(isLoggedIn)
    {
        navigationBar.setElementByName('logout',0);
        navigationBar.setButtonOnClick(logOutFunction,param);
    }
    
    
    const footerNavigation = new Nav();
    footerNavigation.Init("footer");
    footerNavigation.Show("","",beforeFooter+navBar+after);
    if(isLoggedIn)
    {
        footerNavigation.setElementByName('logout',1);
        footerNavigation.setButtonOnClick(logOutFunction,param);
    }

    return { navigationBar, footerNavigation };

}
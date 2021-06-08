import { Content } from "./Content.js";
class LoginPage extends Content
{
    Show(title, className, htmlCode)
    {
        this.page.innerHTML = `<h2>${title}</h2><div class=${className}>${htmlCode}</div>`; 
    }   
}

export function InitPage(){

    const loginPage = new LoginPage();
    loginPage.Init("main");
    

    const html = `<label for="username">Felhasználó név:</label><br>
    <input type="text" id="username" name="email" value=""><br>
    <label for="password">Jelszó:</label><br>
    <input type="text" id="password" name="password" value=""><br><br>
    <input id="login" type="button" value="Bejelentkezés">`;

    loginPage.Show("Login ","form", html);
    loginPage.setElementById('login');

    return loginPage;
}


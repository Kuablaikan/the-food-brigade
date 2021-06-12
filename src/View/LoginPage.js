import { Content } from "./Content.js";

export function InitPage(){

    const loginPage = new Content();
    loginPage.Init("main");
    

    const html = `<label for="username">Felhasználó név:</label><br>
    <input type="text" id="username" name="email" value=""><br>
    <label for="password">Jelszó:</label><br>
    <input type="password" id="password" name="password" value=""><br><br>
    <input id="login" type="button" value="Bejelentkezés">`;

    loginPage.Show("Login ","form", html);
    loginPage.setElementById('login');

    return loginPage;
}


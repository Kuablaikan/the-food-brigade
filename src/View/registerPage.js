import { Content } from "./Content.js";

export function InitPage(){

    const regPage = new Content();
    regPage.Init("main");
    

    const html = `<label for="username">Felhasználó név:</label><br>
    <input type="text" id="username" name="username" value=""><br><br>
    <label for="password">Jelszó:</label><br>
    <input type="password" id="password" name="password" value=""><br><br>
    <label for="rpassword">Jelszó mégegyszer:</label><br>
    <input type="password" id="rpassword" name="rpassword" value=""><br><br>

    <input id="register" type="button" value="Regisztráció">`;

    regPage.Show("Register ","form", html);
    regPage.setElementById('register');

    return regPage;
}
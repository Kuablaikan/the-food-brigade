import * as Abstract from "/the-food-brigade/src/View/content.js";

export function render(){

    let html = `<label for="username">Felhasználó név:</label><br>
    <input type="text" id="username" name="email" value=""><br>
    <label for="password">Jelszó:</label><br>
    <input type="text" id="password" name="password" value=""><br><br>
    <input id="login" type="button" value="Bejelentkezés">
    <input id="logout" type="button" value="Kijelentkezés">`;

    let loginPage = new Abstract.Content();
    loginPage.init("main");
    loginPage.show("Login ","form", html);
}

import * as Abstract from "/the-food-brigade/src/View/content.js";
class LoginPage extends Abstract.Content
{
    constructor (){
        super();
    }
    loginElement;
    input;

    show(title, className, htmlCode)
    {
        this.page.innerHTML = `<h2>${title}</h2><div class=${className}>${htmlCode}</div>`;

        this.getElement();
   
    }


    getElement()
    {
        this.loginElement = document.getElementById('login');
    }
    
}

export function render(){

    let html = `<label for="username">Felhasználó név:</label><br>
    <input type="text" id="username" name="email" value=""><br>
    <label for="password">Jelszó:</label><br>
    <input type="text" id="password" name="password" value=""><br><br>
    <input id="login" type="button" value="Bejelentkezés">`;

    let loginPage = new LoginPage();
    loginPage.init("main");
    loginPage.show("Login ","form", html);

    return loginPage.loginElement;

}


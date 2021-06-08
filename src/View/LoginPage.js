import { Content } from "/the-food-brigade/src/View/content.js";
class LoginPage extends Content
{
    constructor (){
        super();
    }
    loginElement;
    input;

    Show(title, className, htmlCode)
    {
        this.page.innerHTML = `<h2>${title}</h2><div class=${className}>${htmlCode}</div>`;
        
        //console.log(this.selectedElement);
    }


   /* getElement()
    {
        this.loginElement = document.getElementById('login');
    }*/
    
}

export function InitPage(buttonId){

    let html = `<label for="username">Felhasználó név:</label><br>
    <input type="text" id="username" name="email" value=""><br>
    <label for="password">Jelszó:</label><br>
    <input type="text" id="password" name="password" value=""><br><br>
    <input id="login" type="button" value="Bejelentkezés">`;

    let loginPage = new LoginPage();
    loginPage.Init("main");
    loginPage.Show("Login ","form", html);

    loginPage.setElementById(buttonId);

    return loginPage;
}


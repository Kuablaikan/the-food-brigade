import { Content } from "./../View/content.js";
import * as Nav from "./../View/Navigation.js";
import * as MainPage from "./../View/MainPage.js";
import * as EmptyPage from "./../View/EmptyPage.js";
import * as LoginPage from "./../View/LoginPage.js";
import * as CartPage from "./../View/CartPage.js";
import * as SuccessPage from "./../View/SuccessPage.js";
import * as PopUp from "./../View/popUp.js"
import * as RegisterPage from "./../View/registerPage.js"

import { CheeseService } from "./../Service/CheeseService.js";
import { CartItemService } from "./../Service/CartItemService.js";
import { UserService } from "./../Service/UserService.js";

import { User } from "./../Model/User.js";
import { Cheese } from "./../Model/Cheese.js";
import { CartItem } from "./../Model/CartItem.js";

//aktuális oldal(tartalom szempontjából)
let currPage;
let currButtons = [];
let currList;
let currCart;

const logOutFunction = function()
{
    sessionStorage.removeItem('isLoggedIn'); 
}

const popUp = PopUp.InitPage();
const nav = Nav.InitPage(whoIsLogged(), logOutFunction);

//TESZT
UserService.save(new User(5,'asd','asd'));
UserService.save(new User(2,'asd2','asd2'));
CheeseService.save( new Cheese(3, "Trapista sajt", "finom?", 15000, 2, "img/trapista.jpg") );
CheeseService.save( new Cheese(2, "Goiuda sajt", "LOREM IPSUM DOLOR SIT ", 9999, 10, "img/gouda.jpg") );
//TESZT

const param = Content.getUrlParam();
if (param === 'home' || param === null)
{
    currList = CheeseService.getAll();
    currPage = MainPage.InitPage(currList);
    currButtons = currPage.getButtons();

    for (let i = 0; i < currButtons.length; i++)
    {
        currButtons[i].onclick = function(evt)
        {
            evt.preventDefault();
            
            if(whoIsLogged())
            {
                const auxList = CartItemService.getAll().map((cartItem) => { return cartItem.id; });
                let maxId = 0;
                if (auxList.length > 0) maxId = Math.max(...auxList);
    
                let cartItem = CartItemService.getByUserId( parseInt(whoIsLogged()) ).find( (cartItem) =>
                { 
                    return cartItem.cheeseId === parseInt(currButtons[i].id); 
                });
                if (cartItem)
                { 
                    //if(cartItem.quantity < CheeseService.getById(parseInt(cartItem.cheeseId)).quantity)
                    //{
                    popUp.Show("Hozzáadva!");
                    popUp.Hide(1500);
                    CartItemService.save(new CartItem(cartItem.id,parseInt(whoIsLogged()),currButtons[i].id,cartItem.quantity+1));
                    //}
                    //else
                    //{
                    //    popUp.Show("Nincs több raktáron ebből a sajtból!");
                    //    popUp.Hide(3000);
                    //}
                }
                else
                {
                    popUp.Show("Hozzáadva!");
                    popUp.Hide(1500);
                    CartItemService.save(new CartItem(maxId+1,parseInt(whoIsLogged()),currButtons[i].id,1)); 
                }
            }
            else
            {
                popUp.Show("Be kell jelentkezned!");
                popUp.Hide(3000);
            }  
        }
    }
}
else if(param === 'register' && !whoIsLogged())
{
    currPage = RegisterPage.InitPage();
    let regBtn = currPage.selectedElement;
    regBtn.onclick = function(evt)
    {
        let input = 
                    {
                        username: document.getElementById('username').value,
                        password: document.getElementById('password').value,
                        rpassword: document.getElementById('rpassword').value
                    };
        //check two pw
        if(input.username === "" || input.username === null)
        {
            popUp.Show('A "felhasználónév" mező nincs kitöltve!');
            setTimeout(() => {popUp.Hide(); }, 3000);
        }
        else if(input.password === "" || input.password === null)
        {
            popUp.Show('A "jelszo" mező nincs kitöltve!');
            setTimeout(() => {popUp.Hide(); }, 3000);
        }
        else if(input.rpassword=== "" || input.rpassword === null)
        {
            popUp.Show('A "jelszo mégegyszer" mező nincs kitöltve!');
            setTimeout(() => {popUp.Hide(); }, 3000);
        }
        else if(input.password === input.rpassword)
        {
            //check username is already taken
            console.log(UserService.getAll());
            const userList = UserService.getAll();
            for ( let user in userList)
            {
                if(userList[user].username === input.username)
                {
                    console.log("FOGLALT");
                    popUp.Show("A felhasználó név foglalt!");
                    setTimeout(() => {popUp.Hide(); }, 3000);
                    return;
                }
                
            }
            const auxList = UserService.getAll().map((user) => { return user.id; });
            let maxId = 0;
            if (auxList.length > 0) maxId = Math.max(...auxList);

            const newUser = new User(maxId+1,input.username,input.password);
            UserService.save(newUser);

            popUp.Show("Sikeres regisztráció!");
            setTimeout(() => {popUp.Hide(); }, 3000);

            Login(maxId+1);

        }
        else
        {
            popUp.Show("A két jelszó nem egyezzik!");
            setTimeout(() => {popUp.Hide(); }, 3000);
        }

    }
}
else if(param === 'login' && !whoIsLogged())
{
    currPage = LoginPage.InitPage();
    let loginBtn = currPage.selectedElement;
    loginBtn.onclick = function(evt)
    {
        let input = 
                    {
                        username: document.getElementById('username').value,
                        password: document.getElementById('password').value
                    };
        let login = UserService.getByUsername(input.username);

        if(login) //check is not null
        {
            if(input.username === "" || input.username === null)
            {
                popUp.Show('A "felhasználónév" mező nincs kitöltve!');
                setTimeout(() => {popUp.Hide(); }, 3000);
            }
            else if(input.password === "" || input.password === null)
            {
                popUp.Show('A "jelszo" mező nincs kitöltve!');
                setTimeout(() => {popUp.Hide(); }, 3000);
            }
            else if(input.password === login.password)
            {
                popUp.Show("Sikeres bejelentkezés!");
                popUp.Hide(3000);
                Login(login.id);
            }
            else
            {
                popUp.Show("Nincs ilyen felhasználó - jelszó páros!");
                popUp.Hide(3000);
            }
        }
        else
        {
            popUp.Show("Nincs ilyen felhasználó - jelszó páros!");
            popUp.Hide(3000);
        }
    }
}
else if(param === 'cart' && whoIsLogged())
{
    currList = [];
    currCart = CartItemService.getByUserId(parseInt(whoIsLogged()));
    

    for (let i in currCart )
    {
        currList.push( CheeseService.getById(currCart[i].cheeseId) );
    }

    currPage = CartPage.InitPage(currList, currCart, "?page=success");

    currButtons = currPage.getButtons();
    for (let i = 0; i < currButtons.length; i++)
    {
        currButtons[i].onclick = function(evt)
        {
            evt.preventDefault();
            CartItemService.delete(CartItemService.getById( parseInt( currButtons[i].id ) ) );
            location.reload();
        }
    }
}
else if(param === 'success')
{
    currPage = SuccessPage.InitPage();

}
else
{
    currPage = EmptyPage.InitPage();
}


//FUNCTIONS
function Login(userId){
    sessionStorage.setItem('isLoggedIn',userId);
    Nav.InitPage(whoIsLogged(), logOutFunction);
    currPage.Show(`Üdvözöljük: ${UserService.getById(parseInt(userId)).username}`, "", "");  
}

function whoIsLogged()
{
    let isLogged = sessionStorage.getItem('isLoggedIn');
    if(isLogged)
    {
        return parseInt(isLogged);
    }
    else
    {
        return false;
    }
}

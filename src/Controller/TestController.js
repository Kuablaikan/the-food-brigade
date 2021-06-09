import { Content } from "./../View/content.js";
import * as Nav from "./../View/Navigation.js";
import * as MainPage from "./../View/MainPage.js";
import * as EmptyPage from "./../View/EmptyPage.js";
import * as LoginPage from "./../View/LoginPage.js";
import * as CartPage from "./../View/CartPage.js";
import * as SuccessPage from "./../View/SuccessPage.js";
import * as PopUp from "./../View/popUp.js"

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




//Navigáció


const nav = Nav.InitPage(whoIsLogged(), logOutFunction);
/*if(whoIsLogged())
{
    nav.navigationBar.selectedElement.onclick = function(evt)
    {
        console.log(whoIsLogged());
        Logout();
    }
    nav.footerNavigation.selectedElement.onclick = function(evt)
    {
        console.log(whoIsLogged());
        Logout();
    }
}*/



//TESZT
/*
const sajt = new Cheese(5, "Trapista sajt", "finom?", 15000, 6, "img/trapista.jpg");
const user = new User(1, 'admin', 'asd');
const cartItem = new CartItem(0,1,5,5);//id,userId,cheeseId,quantity
*/
/*
console.log('////');
console.log(`sajt is valid ? ${sajt.isValid()}`);
console.log(`user is valid ? ${user.isValid()}`);
console.log(`cartItem is valid ? ${cartItem.isValid()}`);
console.log('////');
*/

//UserService.save(user);
UserService.save(new User(5,'asd','asd'));
UserService.save(new User(2,'asd2','asd2'));
//CheeseService.save(sajt);  
CheeseService.save( new Cheese(3, "Trapista sajt", "finom?", 15000, 2, "img/trapista.jpg") );
CheeseService.save( new Cheese(2, "Goiuda sajt", "LOREM IPSUM DOLOR SIT ", 9999, 10, "img/gouda.jpg") );
//CartItemService.save(cartItem);
//CartItemService.save( new CartItem(0,1,3,5) );

/*
console.log(CartItemService.getByUserId(1));
console.log('////');
console.log(CartItemService.getByUserId(1)[0].cheeseId);
console.log('////');
console.log(CheeseService.getById(CartItemService.getByUserId(1)[0].cheeseId));
*/
//TESZT

let param = Content.getUrlParam();
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
                if (auxList.length > 0)
                    maxId = Math.max(...auxList);
    
                let cartItem = CartItemService.getByUserId( parseInt(whoIsLogged()) ).find( (cartItem) =>
                { 
                    return cartItem.cheeseId === parseInt(currButtons[i].id); 
                });
                if (cartItem)
                { 
                    if(cartItem.quantity < CheeseService.getById(parseInt(cartItem.cheeseId)).quantity)
                    {
                        CartItemService.save(new CartItem(cartItem.id,parseInt(whoIsLogged()),currButtons[i].id,cartItem.quantity+1));
                    }
                    else
                    {
                        //TODO SOME FEEDBACK TO NO MORE ITEM LEFT
                        popUp.Show("Nincs több raktáron ebből a sajtból!");
                        setTimeout(() => {popUp.Hide(); }, 3000);
                        console.log(`Elfogyot a sajt(${cartItem.cheeseId})`);
                    }
                }
                else
                {
                    CartItemService.save(new CartItem(maxId+1,parseInt(whoIsLogged()),currButtons[i].id,1)); 
                }
            }
            else
            {
                popUp.Show("Be kell jelentkezned!");
                setTimeout(() => {popUp.Hide(); }, 3000);
            }


            
        }
    }
}
else if(param === 'login')
{
    
    currPage = LoginPage.InitPage('login');
    let loginBtn = currPage.selectedElement;
    loginBtn.onclick = function(evt)
    {
        console.log("click");
        let input = 
                    {
                        username: document.getElementById('username').value,
                        password: document.getElementById('password').value
                    };
        let login = UserService.getByUsername(input.username);

        if(login) //check is not null
        {
            if(input.password === login.password)
            {
                //TODO FEEDBACK
                popUp.Show("Sikeres bejelentkezés!");
                setTimeout(() => {popUp.Hide(); }, 3000);
                Login(login.id);
                console.log("Sikeress bejelentkezés");

                
            }
            else
            {
                //TODO FEEDBACK
                popUp.Show("Nincs ilyen felhasználó - jelszó páros!");
                setTimeout(() => { popUp.Hide(); }, 3000);
                console.log("Nincs ilyen felhasználó - jelszó páros!");
            }
        }
        else
        {
            //TODO FEEDBACK
            popUp.Show("Nincs ilyen felhasználó - jelszó páros!");
            setTimeout(() => { popUp.Hide(); }, 3000);
            //currPage.popUpMessage("Nincs ilyen felhasználó - név páros!!");
            console.log("Nincs ilyen felhasználó - jelszó páros!");
        }
    }
}
else if(param === 'cart')
{
    currList = [];
    currCart = CartItemService.getByUserId(parseInt(whoIsLogged()));
    

    for (let i in currCart )
    {
        currList.push( CheeseService.getById(currCart[i].cheeseId) );
    }

    //2. string paraméterel beállítható egy navigáció vagy bármi más ha szükséges
    currPage = CartPage.InitPage(currList, currCart, "?page=success");

    currButtons = currPage.getButtons();
    for (let i = 0; i < currButtons.length; i++)
    {
        currButtons[i].onclick = function(evt)
        {
            evt.preventDefault();
            console.log(`Clicked: ${currButtons[i].id} (CartItemId)`);

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

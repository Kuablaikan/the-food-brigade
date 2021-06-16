import { Content } from "./../View/content.js";
import * as Nav from "./../View/Navigation.js";
import * as MainPage from "./../View/MainPage.js";
import * as EmptyPage from "./../View/EmptyPage.js";
import * as LoginPage from "./../View/LoginPage.js";
import * as CartPage from "./../View/CartPage.js";
import * as SuccessPage from "./../View/SuccessPage.js";
import * as PopUp from "./../View/popUp.js"
import * as RegisterPage from "./../View/registerPage.js"
import * as OrderPage from "./../View/orderPage.js";
import * as OrdersPage from "./../View/userOrdersPage.js";
import * as StatPage from "./../View/StatPage.js";

import { CheeseService } from "./../Service/CheeseService.js";
import { CartItemService } from "./../Service/CartItemService.js";
import { UserService } from "./../Service/UserService.js";

import { User } from "./../Model/User.js";
import { Cheese } from "./../Model/Cheese.js";
import { CartItem } from "./../Model/CartItem.js";
import { OrderItemService } from "../Service/OrderItemService.js";
import { OrderService } from "../Service/OrderService.js";
import { Order } from "../Model/Order.js";
import { OrderItem } from "../Model/OrderItem.js";

//URL PARAM
const param = Content.getUrlParam();

//VARS
let currPage;
let currButtons = [];
let currList;
let currCart;
let currOrders;

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
const logOutFunction = function()
{
    sessionStorage.removeItem('isLoggedIn'); 
}

//NAVIGATION AND POPUP
const popUp = PopUp.InitPage();
const nav = Nav.InitPage(whoIsLogged(), logOutFunction);

//HOME
if (param === 'home' || param === null)
if (param === 'home' || param === null || detailId !== null)
{
    currList = CheeseService.getAll();
    currPage = MainPage.InitPage(currList);
    currButtons = currPage.getButtons();

    //TESZT
    currPage.setElementById('test');
    const tesztBtn = currPage.selectedElement
    tesztBtn.onclick = function(evt)
    if (param === 'home' || param === null && detailId === null)
    {
        evt.preventDefault();
        UserService.save(new User(5,'asd','asd'));
        UserService.save(new User(2,'asd2','asd2'));
        CheeseService.save( new Cheese(3, "Trapista sajt", "finom?", 15000, 2, "img/trapista.jpg") );
        CheeseService.save( new Cheese(2, "Goiuda sajt", "LOREM IPSUM DOLOR SIT ", 9999, 10, "img/gouda.jpg") );
        CheeseService.save( new Cheese(6, "Trapista sajt", "finom?", 15000, 2, "img/trapista.jpg") );
        CheeseService.save( new Cheese(7, "Goiuda2 sajt", "LOREM IPSUM DOLOR SIT ", 9999, 10, "img/gouda.jpg") );
        CheeseService.save( new Cheese(8, "Trapista3 sajt", "finom?", 15000, 2, "img/trapista.jpg") );
        CheeseService.save( new Cheese(9, "Goiuda10 sajt", "LOREM IPSUM DOLOR SIT ", 9999, 10, "img/gouda.jpg") );
        CheeseService.save( new Cheese(10, "Trapista48 sajt", "finom?", 15000, 2, "img/trapista.jpg") );
        CheeseService.save( new Cheese(11, "Goiuda7 sajt", "LOREM IPSUM DOLOR SIT ", 9999, 10, "img/gouda.jpg") );

        popUp.Show("Teszt adatok feltöltve!");
        popUp.Hide(1500);
    } 
    //TESZT

    //Itt lesz a details hívása
    let detailButtons = [];
    let btn;
    for (let i= 0; i < currButtons.length; i++)
    {
        currPage.setElementByName(currButtons[i].id,0);
        btn = currPage.selectedElement;
        detailButtons.push(btn);
        
        if(detailButtons[i])detailButtons[i].onclick = function(evt)
        {
            evt.preventDefault();
            console.log(`Sajt:${currButtons[i].id}`);
            //kattntásra mit csináljon 
            
        }
    }
    //

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
                    popUp.Show("Hozzáadva!");
                    popUp.Hide(1500);
                    CartItemService.save(new CartItem(cartItem.id,parseInt(whoIsLogged()),currButtons[i].id,cartItem.quantity+1));
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
//REGISTER PAGE
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
            const userList = UserService.getAll();
            for ( let user in userList)
            {
                if(userList[user].username === input.username)
                {
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
//LOGIN PAGE
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
//CART PAGE
else if(param === 'cart' && whoIsLogged())
{
    currList = [];
    let item;
    let storeList = [];
    currCart = CartItemService.getByUserId(parseInt(whoIsLogged()));
    console.log(currCart);
    if(currCart.length > 0)
    {
        for (let i in currCart )
        {
            currList.push( CheeseService.getById(currCart[i].cheeseId) );
        }

        currPage = CartPage.InitPage(currList, currCart, "?page=success");
        //delete buttons
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
        //order button
        currPage.selectedElement.onclick = function(evt)
        {
            evt.preventDefault();
            storeList = CheeseService.getAll();
            if(!currCart)
            {
                popUp.Show("Üres a kosarad!");
                popUp.Hide(3000);
                return;
            }
            for (let i = 0; i < currCart.length; i++)
            {
                for (let j = 0; j < storeList.length; j++)
                {
                    if(currCart[i].cheeseId === storeList[j].id)
                    {
                        
                        if(currCart[i].quantity > storeList[j].quantity)
                        {
                            popUp.Show(`Nincs elgendő ebből:${storeList[i].name}(id:${storeList[j].id}) ${storeList[j].quantity} db áll rendelkezésre.`);
                            popUp.Hide(5000);
                        }
                        else
                        {
                            location.href="?page=order";
                        }
                    }
                } 
            }
        }
    }
    else{
        currPage = CartPage.InitPage();
    }
    
}
//ORDER PAGE
else if(param === 'order')
{
    currList = [];
    let item;
    

    currCart = CartItemService.getByUserId(parseInt(whoIsLogged()));
    for (let i in currCart )
    {
        item = CheeseService.getById(currCart[i].cheeseId)
        item.quantity = currCart[i].quantity;
        currList.push(item );
    }

    currPage = OrderPage.InitPage(currList);

    let input = 
    {
        buyername: document.getElementById('buyername').value,
        address: document.getElementById('address').value
    };

    currPage.selectedElement.onclick = function(evt)
    {
        const auxList = OrderService.getAll().map((order) => { return order.id; });
        let maxId = 0;
        if (auxList.length > 0) maxId = Math.max(...auxList);

        const auxList2 = OrderItemService.getAll().map((orderItem) => { return orderItem.id; });
        let maxId2 = 0;
        if (auxList2.length > 0) maxId2 = Math.max(...auxList2);
        
        OrderService.save(new Order(maxId+1,whoIsLogged(),input.buyername,input.address))
        CartItemService.delete(currCart);

        for(let i in currList)
        {
            let cheese = CheeseService.getById(currList[i].id);

            CheeseService.save(new Cheese(cheese.id,cheese.name, cheese.description, cheese.price, cheese.quantity-currList[i].quantity, cheese.image ));
            OrderItemService.save( new OrderItem(maxId2+1,maxId+1,cheese.id,currList[i].quantity, cheese.price * currList[i].quantity));
            currPage.Clear();
            popUp.Show(`Köszönjük a rendelését: ${UserService.getById(whoIsLogged()).username}!`);
            popUp.Hide(5000);

            maxId2++;
        }
        
    }
}
//USER'S STAT PAGE
else if(param === 'mystat' && whoIsLogged())
{
    
    currPage = StatPage.InitPage();
}
// USER'S ORDERS PAGE
else if(param === 'myOrders' && whoIsLogged())
{
    currList = [];
    currOrders = [];
    let item;
    let orderItems = [];
    let orderItemsGroupedByOrderId = {};
    currOrders = OrderService.getByUserId(whoIsLogged());
    //console.log(currOrders);
    for (let i in currOrders)
    {
        orderItems[i] = OrderItemService.getByOrderId(currOrders[i].id);

    }
    currList = CheeseService.getAll();
    currPage = OrdersPage.InitPage(currList, orderItems, currOrders);
}
//SUCCESS PAGE
else if(param === 'success')
{
    currPage = SuccessPage.InitPage();

}
//ERROR PAGE
else
{
    currPage = EmptyPage.InitPage();
}
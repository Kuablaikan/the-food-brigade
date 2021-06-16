import { Content } from "./Content.js";
import {OrderService} from "./../Service/OrderService.js";
import {OrderItemService} from "./../Service/OrderItemService.js";

export function InitPage(){
    const MystatPage = new Content();
    MystatPage.Init("main");
    let html ='<canvas id="test" width="1000" height="200"></canvas>'
    MystatPage.Show("A Canvas vászon!","",html)
    
    let AllOrders = [];
    let Dates = [];
    let OrderIDs = [];
    let OrderItemsbyID = [];
    
    AllOrders = OrderService.getAll();
    
    for(let i = 0; i<AllOrders.length; i++)
        {
            Dates[i] = AllOrders[i].created;
            OrderIDs[i] = AllOrders[i].id;
            
            let id = OrderIDs[i];
            OrderItemsbyID[i] = OrderItemService.getByOrderId(id);
            
            let teszt = OrderItemsbyID[i];
            console.log(teszt);
        }
    
    var canvas = document.getElementById('test');
    var ctx = canvas.getContext('2d');

    /*ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
    */
    let testData = [ 20, 40, 70, 110, 30, 40, 31, 80];
    let width = 50;
    let currX = 50;
    let base = 200;
    
    ctx.fillStyle = 'green';
    for(let i = 0; i<testData.length; i++)
        {
            let h = testData[i];
            ctx.fillRect(currX, canvas.height - h, width, h);
            currX += width + 10;
            
        }

    return MystatPage;
}
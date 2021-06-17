import { Content } from "./Content.js";
import {OrderService} from "./../Service/OrderService.js";
import {OrderItemService} from "./../Service/OrderItemService.js";
import {CheeseService} from "../Service/CheeseService.js";

export function InitPage(){
    const MystatPage = new Content();
    MystatPage.Init("main");
    let html ='<canvas id="test" width="1000" height="200"></canvas>'
    MystatPage.Show("A Canvas vászon!","",html)
    
    let AllOrders = [];
    let Dates = [];
    let OrderIDs = [];
    let OrderItemsbyID = [];
    let CheeseData = [];
    let CheeseIDs = [];


    CheeseData = CheeseService.getAll();

    //console.log(CheeseData);

    for(let i = 0; i<CheeseData.length; i++)
    {
        CheeseIDs[i] = CheeseIDs.push(CheeseData[i].id);;

        //console.log(CheeseIDs[i]);
    }
    //console.log(CheeseIDs);
    
    AllOrders = OrderService.getAll();
    
    for(let i = 0; i<AllOrders.length; i++)
        {
            Dates[i] = AllOrders[i].created;
            OrderIDs[i] = AllOrders[i].id;
            
            let id = OrderIDs[i];
            OrderItemsbyID[i] = OrderItemsbyID.push(OrderItemService.getByOrderId(id));
            
            let teszt = OrderItemsbyID[i];
            //console.log(teszt);
        }

    let AllOrderItems = OrderItemService.getAll();
    let sumQuantity = new Map();
    for(let i = 0; i < AllOrderItems.length; i++)
    {
        const key = AllOrderItems[i].cheeseId;
        if (!sumQuantity.has(key))
            sumQuantity.set(key, 0);
        sumQuantity.set(key, sumQuantity.get(key) + 1);
    }

    for (const pair of sumQuantity.entries()) {
        //console.log(pair);
    }
   // console.log(sumQuantity.get(3));




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
    //let testData = [ 20, 40, 70, 110, 30, 40, 31, 80];
    let width = 50;
    let currX = 50;
    let base = 200;
    
    ctx.fillStyle = 'green';
    for(let i = 0; i<sumQuantity.size; i++)
        {
            for(let j = 0; j < AllOrderItems.length; j++)
            {
                let h = sumQuantity.get(AllOrderItems[j].cheeseId);
                console.log(h);
                ctx.fillRect(currX, canvas.height - h, width, h);
                currX += width + 10;
            }
        }

    return MystatPage;
}
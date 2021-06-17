import { Content } from "./Content.js";
import {OrderService} from "./../Service/OrderService.js";
import {OrderItemService} from "./../Service/OrderItemService.js";
import {CheeseService} from "../Service/CheeseService.js";

export function InitPage(){
    const MystatPage = new Content();
    MystatPage.Init("main");
    let html ='<div id="chartContainer" style="height: 500px; width: 80%;"></div>' +
        '<canvas id="test" width="1500" height="1500"></canvas>'
    MystatPage.Show("Statistics!","",html)
    
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
        CheeseIDs[i] = CheeseIDs.push(CheeseData[i].id);


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
        sumQuantity.set(key, sumQuantity.get(key) + AllOrderItems[i].quantity);
    }

    for (const pair of sumQuantity.entries()) {
        //console.log(pair);
    }
   // console.log(sumQuantity.get(3));



/*
    var canvas = document.getElementById('test');
    var ctx = canvas.getContext('2d');


    //let testData = [ 20, 40, 70, 110, 30, 40, 31, 80];

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 1000, 450);

    let startX = 20;
    let startY = 20;
    let dgmWidth = 960;
    let dgmHeight= 350;

    ctx.fillStyle = 'red';
    ctx.fillRect(startX, startY, dgmWidth, dgmHeight);

    let width = 35;
    let currX = 50;
    //let base = 200;

    let maxValue = 27;

    ctx.fillStyle = 'green';
    for (const pair of sumQuantity.entries()) {
        let h = pair[1];
        console.log(h);
        h = h / maxValue * dgmHeight;
        ctx.fillRect(startX + currX, startY + (dgmHeight - h), width, h);
        currX += width + 20;
    }*/

    let x = 1;
    let dataPoints = [];
    for (const pair of sumQuantity.entries()) {
        let h = pair[1];
        let y = h;
        let label = CheeseService.getById(pair[0]).name;
        dataPoints.push({ x: x, y: y, label: label });
        console.log(dataPoints);
        x++;
    }

    function InitChart()
    {
        const chart = new CanvasJS.Chart("chartContainer",
            {
                title: {
                    text: "Sales by variety"
                },
                data: [

                    {
                        dataPoints
                    }
                ]
            });

        chart.render();
    }
    InitChart();


    /*ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();*/

    return MystatPage;
}
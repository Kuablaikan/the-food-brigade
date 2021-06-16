import { Content } from "./Content.js";

export function InitPage(){
    const MystatPage = new Content();
    MystatPage.Init("main");
    let html ='<canvas id="test" width="150" height="150"></canvas>'
    MystatPage.Show("A Canvas vászon!","",html)
    
    var canvas = document.getElementById('test');
    var ctx = canvas.getContext('2d');

        ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();

    return MystatPage;
}
import { Content } from "./Content.js";

export function InitPage(orderItems){

    const orderPage = new Content();
    orderPage.Init("main");

    let productsHTML = "";
    let html = "";
    let sumPrice = 0;
    
    const before = `<label for="buyername">Vásárló neve:</label><br>
    <input class="orderInput" type="text" id="buyername" name="buyername" value="Példa Péter"><br><br>
    <label for="address">Szállítási cím:</label><br>
    <input class="orderInput" type="text" id="address" name="address" value="2903 PéldaCity Example u. 6."><br><br>
    <hr>
    <table>
        <tr class="trMain">
            <th>Termék neve</th>
            <th>Darabszám</th>
            <th>Ár</th> 
        </tr>`;

    

for(let i in orderItems)
{
    sumPrice += orderItems[i].price * orderItems[i].quantity;
    html = `<tr>
    <td>${orderItems[i].name}</td>
    <td>${orderItems[i].quantity} db</td>
    <td>${orderItems[i].price * orderItems[i].quantity} Ft</td>
    </tr>`;
    productsHTML += html;
}

const after = `</table>
    <br><br>
    <span>Ősszesen: ${sumPrice} Ft</span>
    <br><br>
    <input id="order" type=submit value="Megrendel">`;

    orderPage.Show("Rendelés","formOrder", before+productsHTML+after);
    orderPage.setElementById('order');

    return orderPage;
}
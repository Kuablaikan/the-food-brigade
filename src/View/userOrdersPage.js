import { Content } from "./Content.js";

export function InitPage(orderList, orderItems)
{
    const ordersPage = new Content();
    ordersPage.Init('main');
    const before = `
    <table>
        <tr class="trMain">
            <th>Termék neve</th>
            <th>Darabszám</th>
            <th>Ár</th> 
        </tr>`;
    let productsHTML = "";
    let html = "";
    let sumPrice = 0;

    for(let i in orderItems)
    {
        sumPrice += orderItems[i].price * orderItems[i].quantity;
        html = `<tr>
        <td>${orderList[i].name}</td>
        <td>${orderItems[i].quantity} db</td>
        <td>${orderItems[i].price * orderItems[i].quantity} Ft</td>
        </tr>`;
        productsHTML += html;
    }
    
    const after = `</table>`;

    ordersPage.Show("Rendelések","formOrder", before+productsHTML+after);

    return ordersPage;
}
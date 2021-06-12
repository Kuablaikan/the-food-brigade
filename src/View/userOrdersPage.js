import { Content } from "./Content.js";

export function InitPage(cheeseList, orderItems, orderList)
{
    const ordersPage = new Content();
    ordersPage.Init('main');
    const before = `
    <table>
        <tr class="Main">
            <th>Rendelés azonosító</th>
            <th>Termék neve</th>
            <th>Darabszám</th>
            <th>Ár</th>
        </tr>
        <tr class="uniqueTr"><th></tr>`;
    let productsHTML = "";
    let html = "";
    let currOrderlength;

    for(let i in orderList)
    {
        html = "<tr>";
        currOrderlength = orderItems[i].length;

        html += `<td class="uniqueTd" rowspan="${currOrderlength}">${orderList[i].id}</td>`;
        for (let j in orderItems[i])
        {
            for (let k in cheeseList)
            {
                if(cheeseList[k].id === orderItems[i][j].cheeseId)
                {
                    html += `<td>${cheeseList[k].name}</td>
                    <td>${orderItems[i][j].quantity} db</td>
                    <td>${orderItems[i][j].price} Ft</td>`;
                }
            }
            html += `</tr>`;   
        } 
        html += `<tr class="uniqueTr"><th></tr>`;
        productsHTML += html;
    }
    const after = `</table>`;

    ordersPage.Show("Rendelések","formOrder", before+productsHTML+after);

    return ordersPage;
}
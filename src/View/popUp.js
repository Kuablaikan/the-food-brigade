import { Content } from "./Content.js";

class PopUp extends Content
{
    Show(message){
        this.page.innerHTML = `<h3>${message}</h3>`;
        this.page.style.display = "block";
        this.page.style.transition = "opacity 0.25s linear 0s";
        this.page.style.opacity = 0.0;
        setTimeout(() => { this.page.style.opacity = 1.0; }, 0);
    }

    Hide(delay) {
        let ticket = sessionStorage.getItem('popupTicket');
        if (!ticket)
            ticket = 0;
        else
            ticket = parseInt(ticket) + 1;
        sessionStorage.setItem('popupTicket', ticket);

        (() => {
            const localTicket = ticket;
            setTimeout(() => {
                const ticket = sessionStorage.getItem('popupTicket');
                if (ticket && localTicket === parseInt(ticket)) {
                    this.page.style.opacity = 0.0;
                    setTimeout(() => { this.page.style.display = "none"; }, 400);
                }
            }, delay);
        })();
    }
}

export function InitPage(){

    const popUp = new PopUp();
    popUp.InitByClass("popUp", 0);

    return popUp;
}
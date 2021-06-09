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

    Hide() {
        this.page.style.opacity = 0.0;
        setTimeout(() => { this.page.style.display = "none"; }, 400);
    }
}

export function InitPage(){

    const popUp = new PopUp();
    console.log(document.getElementsByClassName("popUp")[0])
    popUp.InitByClass("popUp", 0);

    return popUp;
}
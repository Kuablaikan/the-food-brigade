import { Content } from "./Content.js";

class PopUp extends Content
{
    Show(message){
        this.page.innerHTML = `<h3>${message}</h3>`;
    }

    setFadeDefault()
    {
        this.page.style.opacity = 1;
    }

    /*fade()
    {
        this.page.style.opacity-=.1
    }*/

}

export function InitPage(message){

    const popUp = new PopUp();
    console.log(document.getElementsByClassName("popUp")[0])
    popUp.InitByClass("popUp", 0);
    popUp.Show(message);

    //(function fade(){(popUp.page.style.opacity-=.1)<0?popUp.page.style.display="none":setTimeout(fade,40)})();
    return popUp;
}
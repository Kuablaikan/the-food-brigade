import { Content } from "./Content.js";
export function InitPage(){
    const emptyPage = new Content();
    emptyPage.Init("main");
    emptyPage.Show("A kért oldal nem található!","","")

    return emptyPage;
}
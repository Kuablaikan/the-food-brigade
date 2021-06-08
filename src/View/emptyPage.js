import { Content } from "/the-food-brigade/src/View/content.js";
export function InitPage(){
    let emptyPage = new Content();
    emptyPage.Init("main");
    emptyPage.clear();
    emptyPage.Show("A kért oldal nem található!","","")

    return emptyPage;
}
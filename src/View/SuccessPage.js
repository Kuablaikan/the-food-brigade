import { Content } from "/the-food-brigade/src/View/content.js";

export function InitPage(){

    let html = "";

    let successPage = new Content();
    successPage.Init("main");
    successPage.Show("Köszönjük a rendelését! ","", html);

    return successPage;
}
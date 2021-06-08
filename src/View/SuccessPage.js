import { Content } from "./Content.js";

export function InitPage(){

    let html = "";

    const successPage = new Content();
    successPage.Init("main");
    successPage.Show("Köszönjük a rendelését! ","", html);

    return successPage;
}
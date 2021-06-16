import { Content } from "./Content.js";

export function InitPage(){
    const MystatPage = new Content();
    MystatPage.Init("main");
    MystatPage.Show("A kért oldal: mystat!","","")

    return MystatPage;
}
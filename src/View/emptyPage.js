import * as Abstract from "/the-food-brigade/src/View/content.js";
export function render(){
    let page = new Abstract.Content();
    page.init("main");
    page.clear();
    page.show("A kért oldal nem található!","","")

}
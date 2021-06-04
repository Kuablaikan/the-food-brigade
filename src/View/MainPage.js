import * as Abstract from "/the-food-brigade/src/View/content.js";

class MainPage extends Abstract.Content
{
    constructor (type){
        super();
        this.type = type;
    }

    show(title,contentHTML){
        this.page.innerHTML = `<h2>${title} (${this.type})</h2>${contentHTML}`;
    }
    
}

 export function Render(){
    var probaPage = new MainPage("This type is MainPage");
    probaPage.init("content");
    probaPage.clear();
    probaPage.show("Próba page", "<p>ASDASDASD</p>");
}


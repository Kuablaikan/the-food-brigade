export class Content {  

    init(element)
    {
        this.page = document.querySelector(element);
    }
    initById(elementId)
    {
        this.page = document.getElementById(elementId);
    }
    clear()
    {
        this.page.innerHTML = " ";
    }
    show(title, className, htmlCode)
    {
        this.page.innerHTML = `<h2>${title}</h2><div class=${className}>${htmlCode}</div>`;
    }
    addById(elementId, htmlCode)
    {
        var element = document.getElementById(elementId);
        element.innerHTML = htmlCode;
        
    }
    add(element, htmlCode)
    {
        var element = document.getElementById(element);
        element.innerHTML = htmlCode;
    }
    
    static getUrlParam()
    {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let param = urlParams.get('page');

        return param;
    }
}
















/*var probaPage = new Content();
probaPage.init("content");
probaPage.clear();
probaPage.show("Próba page", "red", "<p>ASDASDASD</p>");*/



/*function Content(){

}

Content.prototype.init=function(elementId){
        
}
Content.prototype.clear = function(){
    this.page.innerHTML = " ";
}
Content.prototype.show=function(title,className,contentHTML){ 
    this.page.innerHTML = `<h2>${title}</h2><div class=${className}>${contentHTML}</div>`;
}
Content.prototype.type = "unknown";
console.log("Abstract class loaded!");

function MainPage(elementId) {
    this.init(elementId);

}
MainPage.prototype= new Content();
MainPage.prototype.type = "MainPage";

var probaPage = new MainPage();
probaPage.init("content");
probaPage.clear();
probaPage.show("Próba page", "red", "<p>ASDASDASD</p>");*/
export class Content {  

    init(elementId)
    {
        this.page = document.getElementById(elementId);
    }
    clear()
    {
        this.page.innerHTML = " ";
    }
    show(title, className, contentHTML)
    {
        this.page.innerHTML = `<h2>${title}</h2><div class=${className}>${contentHTML}</div>`;
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
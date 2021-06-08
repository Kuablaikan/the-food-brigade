export class Content {  

    constructor(){
        this.buttons = [];
    }

    Init(element)
    {
        this.page = document.querySelector(element);
    }
    InitById(elementId)
    {
        this.page = document.getElementById(elementId);
    }
    Clear()
    {
        this.page.innerHTML = " ";
    }
    Show(title, className, htmlCode)
    {
        this.page.innerHTML = `<h2>${title}</h2><div class=${className}>${htmlCode}</div>`;
    }
    AddById(elementId, htmlCode)
    {
        var element = document.getElementById(elementId);
        element.innerHTML = htmlCode;
        
    }
    Add(element, htmlCode)
    {
        var element = document.getElementById(element);
        element.innerHTML = htmlCode;
    }

    setElementById(id)
    {
        this.selectedElement = document.getElementById(id);
    }

    addButtonsByArrayOfIds(ids)
    {
        for (let id in ids)
         {
            this.setElementById(ids[id]);
            this.buttons.push( this.selectedElement);
         }
    }

    getButtons()
    {
        return this.buttons;
    }

    clearButtons()
    {
        this.buttons = [];
    }
    
    
    static getUrlParam()
    {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let param = urlParams.get('page');

        return param;
    }
}
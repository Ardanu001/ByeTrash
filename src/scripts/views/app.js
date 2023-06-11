import UrlParser from "../routes/url-Parser";
import routes from "../routes/routes";
import DrawerInitiator from "../utils/drawerinitiator";

class app {
    constructor({content, button, form}){
        this._content = content;
        this._button = button;
        this._form = form;

        this._initialAppShell();
    }

    _initialAppShell(){
        DrawerInitiator.init({
            content: this._content,
            button: this._button,
        })
        
    }

    async renderpage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }

    async renderform(){
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._form.innerHTML = await page.render();
        await page.afterRender();   
    }
}

export default app;

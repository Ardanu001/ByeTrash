import UrlParser from "../routes/url-Parser";
import routes from "../routes/routes";

class app {
    constructor({content}){
        this._content = content;
    }

    async renderpage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default app;

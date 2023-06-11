import homeWebsite from "../views/pages/home";
import aboutWebsite from "../views/pages/about";

const routes = {
    '/': homeWebsite, //default pages
    '/homepage': homeWebsite,
    '/aboutpage': aboutWebsite,
};

export default routes;
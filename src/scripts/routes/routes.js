import homeWebsite from "../views/pages/home";
import aboutWebsite from "../views/pages/about";
import serviceWebsite from "../views/pages/service";
import loginForm from "../views/pages/loginPage";

const routes = {
    '/': homeWebsite, //default pages
    '/homepage': homeWebsite,
    '/aboutpage': aboutWebsite,
    '/servicepage': serviceWebsite,
    '/loginpage' : loginForm,
};

export default routes;
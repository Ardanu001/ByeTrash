import homeWebsite from "../views/pages/home";
import aboutWebsite from "../views/pages/about";
import serviceWebsite from "../views/pages/service";
import loginForm from "../views/pages/loginPage";
import signUpForm from "../views/pages/signUp";

const routes = {
    '/': homeWebsite, //default pages
    '/homepage': homeWebsite,
    '/aboutpage': aboutWebsite,
    '/servicepage': serviceWebsite,
    '/loginpage' : loginForm,
    '/signuppage': signUpForm,
};

export default routes;
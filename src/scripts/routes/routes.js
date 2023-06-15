import homeWebsite from "../views/pages/home";
import aboutWebsite from "../views/pages/about";
import serviceWebsite from "../views/pages/service";
import TukarSampah from "../views/pages/formTukarSampah";
const routes = {
    '/': homeWebsite, //default pages
    '/homepage': homeWebsite,
    '/aboutpage': aboutWebsite,
    '/servicepage': serviceWebsite,
    '/formTukarSampah': TukarSampah,
};

export default routes;
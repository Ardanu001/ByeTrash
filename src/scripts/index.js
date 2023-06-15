import '../styles/main.css';
import 'regenerator-runtime';
import app from './views/app';
import '../controller/register';

const App = new app({
    content: document.querySelector('.main'),
    button: document.querySelector('.navbar-toggler'),
});

window.addEventListener('hashchange', () => {
    App.renderpage();
});

window.addEventListener('load', () => {
    App.renderpage();
});

window.addEventListener('click', () => {
    App.renderform();
});

window.addEventListener('load', () => {
    App.renderform();
});
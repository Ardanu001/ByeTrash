import '../styles/login.css';
import '../styles/main.css';
import '../styles/signup.css';
import 'regenerator-runtime';
import app from './views/app';

const App = new app({
    content: document.querySelector('main'),
    button: document.querySelector('.navbar-toggler'),
    form: document.querySelector('#form'),
});

window.addEventListener('hashchange', () => {
    App.renderpage();
});

window.addEventListener('load', () => {
    App.renderpage();
});
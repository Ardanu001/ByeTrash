import '../styles/login.css';
import '../styles/main.css';
import '../styles/signup.css';
import '../public/hero/hero-1.jpg'
import '../public/logo/back-icon.svg';
import '../public/logo/logo-2.png';
import '../public/logo/logo_byetrash.svg';
import '../public/pict/profile.jpg';
import '../public/pict/thumb1.png';
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
})
/* eslint-disable new-cap */
import '../styles/main.css';
import 'regenerator-runtime';
import app from './views/app';

const App = new app({
  content: document.querySelector('main'),
  button: document.querySelector('.navbar-toggler'),
});

window.addEventListener('hashchange', () => {
  App.renderpage();
});

window.addEventListener('load', () => {
  App.renderpage();
});

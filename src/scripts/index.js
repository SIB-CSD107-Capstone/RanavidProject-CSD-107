/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/_responsive.scss';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@iconify/iconify';
import $ from 'jquery';
import App from './views/app';

// rotate up-arrow-icon on event collapse accordion
$('.multi-collapse').on('show.bs.collapse', () => {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = 'rotate(0deg)';
});

$('.multi-collapse').on('hide.bs.collapse', () => {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = 'rotate(180deg)';
});

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('load', (event) => {
  app.renderPage();
});

window.addEventListener('hashchange', (event) => {
  app.renderPage();
});

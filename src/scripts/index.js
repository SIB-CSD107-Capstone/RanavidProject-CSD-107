import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/_responsive.scss';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@iconify/iconify';
// import $ from 'jquery';
import App from './views/app';

// rotate up-arrow-icon on event collapse accordion
// $('.multi-collapse').on('show.bs.collapse', () => {
//   this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = 'rotate(0deg)';
// });

// $('.multi-collapse').on('hide.bs.collapse', () => {
//   this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = 'rotate(180deg)';
// });

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/_responsive.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@iconify/iconify';
import './components/navbar-app';
import './components/footer-app';
import './components/loading-animation';
import $ from 'jquery';
import App from './views/app';

// Loading
const loadingPage = () => {
  document.querySelector('loading-animation').classList.remove('loading');
  document.querySelector('loading-animation>div').classList.add('loadingio-spinner-rolling-aiak6voamqs');
  document.body.style.opacity = '0.85';
};

const loadingPageAfter = () => {
  const loadingTimeout = setInterval(() => {
    document.querySelector('loading-animation>div').classList.remove('loadingio-spinner-rolling-aiak6voamqs');
    document.querySelector('loading-animation').classList.add('loading');
    document.body.style.opacity = '1';
    clearTimeout(loadingTimeout);
  }, 100);
};

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

window.addEventListener('load', () => {
  loadingPage();
  app.renderPage();
  loadingPageAfter();
});

window.addEventListener('hashchange', () => {
  loadingPage();
  app.renderPage();
  loadingPageAfter();
});

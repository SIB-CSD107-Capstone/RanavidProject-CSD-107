import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/_responsive.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@iconify/iconify';
import './components/skip-to-content';
import './components/navbar-app';
import './components/footer-app';
import './components/loading-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/app';

AOS.init({
  once: true,
});
const skipBtn = document.querySelector('skip-to-content');

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
  }, 500);
};

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('load', () => {
  loadingPage();
  app.renderPage();
  swRegister();
  loadingPageAfter();
});

window.addEventListener('hashchange', () => {
  loadingPage();
  app.renderPage();
  loadingPageAfter();
});

window.addEventListener('DOMContentLoaded', () => {
  skipBtn.addEventListener('click', () => {
    document.querySelector('#main-content').focus();
  });
});

window.addEventListener('offline', () => {
  Swal.fire(
    'The Internet?',
    'Oops, internet disconnected. check your connection.',
    'question',
  );
});

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/_responsive.scss';
import 'bootstrap';
import '@iconify/iconify';
import './components/skip-to-content';
import './components/navbar-app';
import './components/footer-app';
import './components/loading-animation';
import Swal from 'sweetalert2';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';

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

const addActiveNavLink = (currentLocation, navLinks) => {
  navLinks.forEach((navLink) => {
    if (navLink.href === currentLocation) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
};

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('load', () => {
  loadingPage();
  app.renderPage();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  }
  loadingPageAfter();

  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll('.nav-link');
  addActiveNavLink(currentLocation, navLinks);
});

window.addEventListener('hashchange', () => {
  loadingPage();
  app.renderPage();
  loadingPageAfter();

  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll('.nav-link');
  addActiveNavLink(currentLocation, navLinks);
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

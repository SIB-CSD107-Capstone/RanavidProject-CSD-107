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
  app.renderPage();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  }

  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll('.nav-link');
  addActiveNavLink(currentLocation, navLinks);
});

window.addEventListener('hashchange', () => {
  app.renderPage();

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

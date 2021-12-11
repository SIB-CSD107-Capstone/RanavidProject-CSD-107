import {
  Workbox,
} from 'workbox-window';

export default function swRegister() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');

    wb.addEventListener('install', (event) => {
      if (process.env.NODE_ENV === 'production') {
        return;
      }

      if (event.isUpdate) {
        console.log('Service worker not supported in this browser');
      }
    });

    wb.register();
  }
};

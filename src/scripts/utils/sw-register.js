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
        if (confim('New app update is available, click Ok to refresh')) {
          window.location.reload();
        }
      }
    });

    wb.register();
  }
};

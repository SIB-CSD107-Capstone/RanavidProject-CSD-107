import {
  Workbox,
} from 'workbox-window';

export default function swRegister() {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        if (Swal.fire('New app update is available, click Ok to refresh')) {
          window.location.reload();
        }
      }
    });

    wb.register();
  }
};

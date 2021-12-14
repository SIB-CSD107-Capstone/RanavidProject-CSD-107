import {
  Workbox,
} from 'workbox-window';
import Swal from 'sweetalert2';

export default function swRegister() {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        Swal.fire({
          title: 'New app update is available, click Ok to refresh',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'Ok',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            window.location.reload();
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info');
          }
        });
      }
    });

    wb.register();
  }
};

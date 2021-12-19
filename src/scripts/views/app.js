import Swal from 'sweetalert2';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import LoadingHelper from '../utils/loading-helper';

class App {
  constructor({
    content,
  }) {
    this._content = content;
  }

  async renderPage() {
    /* set loading animation */
    const loadingContainer = document.querySelector('loading-animation');
    LoadingHelper.setLoading(loadingContainer);

    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      document.querySelector('main').innerHTML = '';

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Halaman tidak ditemukan!',
        confirmButtonText: '<a href="/" class="text-white " id="btn-back-home">Kembali ke home</a>',
      });

      /* set style btn back to home (erorr) */
      const btnBackHome = document.getElementById('btn-back-home');
      btnBackHome.style.display = 'block';
      btnBackHome.style.width = 'fit-content';
      btnBackHome.style.height = 'fit-content';
      btnBackHome.style.padding = '10px';

      btnBackHome.parentElement.style.padding = '0';
      btnBackHome.parentElement.style.whiteSpace = 'nowrap';
    }
    /* clear loading animation */
    LoadingHelper.clearLoading(loadingContainer);
  }
}

export default App;

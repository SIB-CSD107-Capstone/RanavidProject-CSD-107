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
    let page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      page = routes['/home'];
      this._content.innerHTML = await page.render();
      await page.afterRender();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Halaman tidak ditemukan!',
        confirmButtonText: 'Kembali ke home',
      });
    }
    /* clear loading animation */
    LoadingHelper.clearLoading(loadingContainer);
  }
}

export default App;

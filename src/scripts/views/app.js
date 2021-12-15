import Swal from 'sweetalert2';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    content,
  }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    // try {
    //   this._content.innerHTML = await page.render();
    //   await page.afterRender();
    // } catch (error) {
    //   page = routes['/home'];
    //   this._content.innerHTML = await page.render();
    //   await page.afterRender();
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Halaman tidak ditemukan!',
    //     confirmButtonText: 'Kembali ke home',
    //   });
    // }
  }
}

export default App;

class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <div class="footer-up">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5 text-center text-md-left">
          <picture>
      <source media="(max-width: 576px)" data-srcset="./img/ranavid-logo-trans.webp">
        <source media="(max-width: 576px)" data-srcset="./img/ranavid-logo-small.png">
        <source media="(max-width: 992px)" data-srcset="./img/ranavid-logo-trans-medium.png">
        <source data-srcset="./img/ranavid-logo-trans.webp">
        <source data-srcset="./img/ranavid-logo-trans.png">
        <img data-src="./img/ranavid-logo-trans.png" alt="ranavid-logo" class="w-4 lazyload">
      </picture>
            <p>Ranavid merupakan aplikasi web untuk mengecek ketersediaan tempat tidur untuk pasien rawat inap di rumah sakit tertentu berdasarkan kota/kabupaten per provinsi</p>
          </div>
          <div class="col-12 col-md-7 d-flex justify-content-between">
            <div class="col-6 col-md-6">
              <h4 tabindex="0">Resource</h4>
              <ul>
                <li><a href="https://apicovid19indonesia-v2.vercel.app/api/indonesia/more" target="_blank" rel="noreferrer">API Statistik Covid-19 di Indonesia</a></li>
                <li><a href="https://rs-bed-covid-api.vercel.app/" target="_blank" rel="noreferrer">RS Bed Covid Indo API</a></li>
                <li><a href="https://61b090523c954f001722a461.mockapi.io/" target="_blank" rel="noreferrer">MockAPI</a></li>
                <li><a href="https://github.com/SIB-CSD107-Capstone" target="_blank" rel="noreferrer">Github Project Repository</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-6">
              <h4 tabindex="0">Referensi</h4>
              <ul>
                <li><a href="https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA" target="_blank" rel="noreferrer">Indonesia Lokal API</a></li>
                <li><a href="https://github.com/Reynadi531/api-covid19-indonesia-v2" target="_blank" rel="noreferrer">API Covid Indonesia V2</a></li>
                <li><a href="https://covid19.go.id/peta-sebaran" target="_blank" rel="noreferrer">Peta Sebaran Covid-19 di Indonesia</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom d-flex justify-content-between">
      <div
        class="container d-flex justify-content-center align-items-center text-center content-foo-bottom">
        <p>&copy;2021 Ranavid CSD-107. All rights reserved.</p>
      </div>
    </div>
  </footer>    
    `;
  }
}

customElements.define('footer-app', FooterApp);

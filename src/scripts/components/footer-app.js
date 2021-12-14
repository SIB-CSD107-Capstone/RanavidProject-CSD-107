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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
          </div>
          <div class="col-12 col-md-7 d-flex justify-content-between">
            <div class="col-6 col-md-6">
              <h4 tabindex="0">Resource</h4>
              <ul>
                <li><a href="#">Indonesia Lokal API</a></li>
                <li><a href="#">API Covid Indonesia V2</a></li>
                <li><a href="#">RS Bed Covid Indo API</a></li>
                <li><a href="#">Github Project Repository</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-6">
              <h4 tabindex="0">Referensi</h4>
              <ul>
                <li><a href="#">Indonesia Lokal API</a></li>
                <li><a href="#">API Covid Indonesia V2</a></li>
                <li><a href="#">RS Bed Covid Indo API</a></li>
                <li><a href="#">Github Project Repository</a></li>
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

class NavbarApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Header -->
    <header class="header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent custom-nav">
          <a class="navbar-brand" href="#">
          <picture>
      <source media="(max-width: 576px)" data-srcset="./img/ranavid-logo.webp">
        <source media="(max-width: 576px)" data-srcset="./img/ranavid-logo-small.png">
        <source media="(max-width: 992px)" data-srcset="./img/ranavid-logo-medium.png">
        <source data-srcset="./img/ranavid-logo.webp">
        <source data-srcset="./img/ranavid-logo.png">
        <img class="lazyload" data-src="./img/ranavid-logo.png" alt="ranavid-logo">
      </picture>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/favorite/1">Favorite</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#/blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/about-us">About Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    `;
  }
}

customElements.define('navbar-app', NavbarApp);

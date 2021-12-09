class StatisticSectionContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    if (this._data) {
      this.innerHTML = `<header class="mt-5">
      <h2 class="text-center" tabindex="0">
        Statistik <br> Kasus Covid 19 di Indonesia
      </h2>
    </header>
    <div class="container ">
      <div class="row mb-3">
        <div class="col">
          <h3 tabindex="0">Total Kasus Covid 19 di Indonesia</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-6 mb-4">
          <div class="card p-md-4 border border-primary confirmed">
            <div class="card-body">
              <h4 class="card-title text-center mb-5" tabindex="0">Kasus Terkonfirmasi</h4>
              <p class="card-text text-center h3" tabindex="0">${this._data.positif}</p>
            </div>
          </div>
        </div>
        <div class="col-6 mb-4">
          <div class="card p-md-4 border border-info treated h-100">
            <div class="card-body d-flex flex-column  justify-content-between">
              <h4 class="card-title text-center mb-5" tabindex="0">Sedang dirawat</h4>
              <p class="card-text text-center h3" tabindex="0">${this._data.dirawat}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6 mb-4">
          <div class="card p-md-4 border border-success healed">
            <div class="card-body">
              <h4 class="card-title text-center mb-5" tabindex="0">Berhasil Sembuh</h4>
              <p class="card-text text-center h3" tabindex="0">${this._data.sembuh}</p>
            </div>
          </div>
        </div>
        <div class="col-6 mb-4">
          <div class="card p-md-4 border border-danger died h-100">
            <div class="card-body d-flex flex-column  justify-content-between">
              <h4 class="card-title text-center mb-5" tabindex="0">Meninggal</h4>
              <p class="card-text text-center h3" tabindex="0">${this._data.meninggal}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          <p tabindex="0">Untuk Melihat Peta Sebaran Covid 19 di Indonesia Bisa Klik <a
              href="https://covid19.go.id/peta-sebaran" target="_blank" rel="noopener">disini</a>
          </p>
        </div>
      </div>

      <div class="row my-5">
        <div class="col bg-danger text-center p-5 rounded">
          <p class="text-white" tabindex="0">Pada masa pandemi ini ayo kita selalu menerapkan pola hidup sehat
            dengan menjalankan
            5M (Memakai Masker, Mencuci Tangan, Menjaga Jarak, Menghindari Kerumunan, dan Mengurangi Mobilitas).</p>
        </div>
      </div>
    </div>`;
    } else {
      this.renderError('Something Wrong in The Server');
    }
  }

  renderError(message) {
    this.innerHTML = `<h2 style="text-align:center; color: gray;>${message}</h2>`;
  }
}

customElements.define('statistic-section-content', StatisticSectionContent);

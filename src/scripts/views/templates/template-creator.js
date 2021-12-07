const createSearchBar = () => `
<div class="container">
<header class="text-center px-2">
  <h2 tabindex="0">CEK KETERSEDIAAN RAWAT INAP RUMAH SAKIT</h2>
</header>

<div class="row justify-content-center">
  <div class="col col-xl-8">
    <form action="#" class="search-form">
      <div class="form-group">
        <label for="province">Pilih Provinsi</label>
        <select class="form-control" id="province">
          <option selected value>Pilih Provinsi ...</option>
          <option>Jawa Barat</option>
          <option>Jawa Timur</option>
          <option>Jawa Tengah</option>
          <option>Aceh</option>
        </select>
      </div>
      <div class="form-group">
        <label for="city">Pilih Kabupaten / Kota</label>
        <select class="form-control" id="city">
          <option selected value>Pilih Kab/Kota ...</option>
          <option>Jawa Barat</option>
          <option>Jawa Timur</option>
          <option>Jawa Tengah</option>
          <option>Aceh</option>
        </select>
      </div>

      <div class="form-group">
        <label tabindex="0">Jenis Rawat Inap</label>
        <div class="row">
          <div class="col col-lg-5 col-xl-4">
            <button class="form-check btn btn-danger" type="button">
              <input class="" type="radio" name="inpatient" id="covid" value="covid" checked>
              <label class="form-check-label" for="covid">
                Covid
              </label>
            </button>
          </div>
          <div class="col col-lg-5 col-xl-4">
            <button class="form-check btn btn-danger" type="button">
              <input class="" type="radio" name="inpatient" id="non-covid" value="non-covid">
              <label class="form-check-label" for="non-covid">
                Non - Covid
              </label>
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          <button type="button" class="btn btn-search btn-danger" aria-label="cari rumah sakit"
            onclick="location.href='search_page.html';">Cari</button>
        </div>
      </div>
    </form>
  </div>
</div>

</div>

`;

const createStatisticsBar = () => `
<header class="mt-5">
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
                  <p class="card-text text-center h3" tabindex="0">95002</p>
                </div>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="card p-md-4 border border-info treated h-100">
                <div class="card-body">
                  <h4 class="card-title text-center mb-5" tabindex="0">Sedang dirawat</h4>
                  <p class="card-text text-center h3" tabindex="0">5000</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6 mb-4">
              <div class="card p-md-4 border border-success healed">
                <div class="card-body">
                  <h4 class="card-title text-center mb-5" tabindex="0">Berhasil Sembuh</h4>
                  <p class="card-text text-center h3" tabindex="0">95002</p>
                </div>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="card p-md-4 border border-danger died h-100">
                <div class="card-body">
                  <h4 class="card-title text-center mb-5" tabindex="0">Meninggal</h4>
                  <p class="card-text text-center h3" tabindex="0">5000</p>
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
        </div>
`;

export {
  createSearchBar,
  createStatisticsBar,
};
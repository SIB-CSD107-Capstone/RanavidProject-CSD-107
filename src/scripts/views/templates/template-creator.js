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
                <option value="32prop">Jawa Barat</option>
                <option value="33prop">Jawa Timur</option>
                <option>Jawa Tengah</option>
                <option>Aceh</option>
              </select>
            </div>
            <div class="form-group">
              <label for="city">Pilih Kabupaten / Kota</label>
              <select class="form-control" id="city">
                <option selected value>Pilih Kab/Kota ...</option>
                <option value="3216">Bekasi</option>
                <option value="3217">Karawang</option>
                <option>Cikarang</option>
                <option>Cikampek</option>
              </select>
            </div>

            <div class="form-group">
              <label tabindex="0">Jenis Rawat Inap</label>
              <div class="row">
                <div class="col col-lg-5 col-xl-4">
                  <button class="form-check btn btn-danger" type="button">
                    <input type="radio" name="inpatient" id="covid" value="1" checked>
                    <label class="form-check-label" for="covid">
                      Covid
                    </label>
                  </button>
                </div>
                <div class="col col-lg-5 col-xl-4">
                  <button class="form-check btn btn-danger" type="button">
                    <input type="radio" name="inpatient" id="non-covid" value="2">
                    <label class="form-check-label" for="non-covid">
                      Non - Covid
                    </label>
                  </button>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col text-center" id="btn-search-container">
                
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>

`;

const createSearchButton = () => `
<button type="button" class="btn btn-search btn-danger" id="btn-cari-rs"
                  aria-label="cari rumah sakit">Cari</button>
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

const createSearchHospitalBarTemplate = () => `
<div class="col-12 col-md-10 mx-auto">
<h1 class="text-center heading-1" tabindex="0">Cek Ketersediaan Rawat Inap Rumah Sakit</h1>
<div
  class="container-search d-flex flex-column flex-lg-row justify-content-between align-items-center text-center">
  <div class="col-12 col-md-5 col-lg-3 p-0 mb-4 mb-lg-0">
    <div class="pilihan-covid d-flex justify-content-center justify-content-md-between">
      <div class="form-check mr-2 mr-lg-0 mr-xl-3">
        <input class="form-check-input" type="radio" name="isCovid" id="isCovid1" value="Covid" checked>
        <label class="form-check-label" for="isCovid1">
          Covid
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="isCovid" id="isCovid2" value="option1" checked>
        <label class="form-check-label" for="isCovid2">
          Non-Covid
        </label>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 p-0">
    <div class="dropdown-covid d-flex flex-column flex-lg-row">
      <select class="custom-select border-0 mr-2 mb-4 mb-lg-0">
        <option selected>Pilih Provinsi ...</option>
        <option value="1">Jawa Barat</option>
        <option value="2">Jawa Tengah</option>
        <option value="3">Jawa Timur</option>
      </select>
      <select class="custom-select border-0 mb-4 mb-lg-0">
        <option selected>Pilih Kabupaten / Kota ...</option>
        <option value="1">Sukabumi</option>
        <option value="2">Depok</option>
        <option value="3">Bandung</option>
      </select>
    </div>
  </div>
  <div class="col-12 col-md-2 px-0">
    <div class="btn btn-danger btn-cari w-100" tabindex="0">Cari <span class="iconify ml-2" data-icon="fa-solid:arrow-right"
        style="color: white;" data-width="15"></span></div>
  </div>
</div>
</div>
`;

const createSearchResultTemplate = () => `
<p tabindex="0">Hasil Pencarian</p>
      <h2 class="heading-2" tabindex="0">Daftar Rumah Sakit <span class="d-red">.</span></h2>
      <div class="card-hasil">
        <!-- Search -->
        <div class="col-12 col-md-4 p-0 mb-4">
          <div class="search-card w-100 p-2 rounded border d-flex align-items-center pl-2">
            <span class="iconify" data-icon="fa-solid:search" style="color: #c4c4c4;" data-width="24"></span>
            <input type="text" class="border-0 input-rs pl-2 overflow-hidden" aria-label="Cari Rumah Sakit"
              placeholder="Cari Rumah Sakit ..." aria-describedby="Cari Rumah Sakit">
          </div>
        </div>
        <!-- Card -->
        <div class="row row-cols-1 row-cols-md-2 mb-5">
          <div class="col mb-4">
            <div class="card h-100 card-kamar">
              <div class="card-body p-4 p-md-5 text-center text-md-left">
                <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS Umum Daerah Sekarwangi</h3>
                <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
                <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>

              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 card-kamar">
              <div class="card-body p-4 p-md-5 text-center text-md-left">
                <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS Umum Daerah Sekarwangi</h3>
                <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
                <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>
                <div tabindex="0" class="btn btn-primary rounded-pill px-3 btn-rs-not">
                  Tidak Tersedia
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 card-kamar">
              <div class="card-body p-4 p-md-5 text-center text-md-left">
                <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS Umum Daerah Sekarwangi</h3>
                <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
                <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>
                <div tabindex="0" class="btn btn-primary rounded-pill px-3 btn-rs-ready">
                  Tersedia 6 Kamar
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 card-kamar">
              <div class="card-body p-4 p-md-5 text-center text-md-left">
                <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS Umum Daerah Sekarwangi</h3>
                <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
                <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>
                <div tabindex="0" class="btn btn-primary rounded-pill px-3 btn-rs-not">
                  Tidak Tersedia
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 card-kamar">
              <div class="card-body p-4 p-md-5 text-center text-md-left">
                <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS Umum Daerah Sekarwangi</h3>
                <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
                <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>
                <div tabindex="0" class="btn btn-primary rounded-pill px-3 btn-rs-not">
                  Tidak Tersedia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

const createInfoAvailableBedButtonTemplate = () => `
<div tabindex="0" class="btn btn-primary btn-rs-ready px-3 rounded-pill">
                  Tersedia 6 Kamar
                </div>
`;

export {
  createSearchBar,
  createStatisticsBar,
  createSearchButton,
  createSearchHospitalBarTemplate,
  createSearchResultTemplate,
  createInfoAvailableBedButtonTemplate,
};
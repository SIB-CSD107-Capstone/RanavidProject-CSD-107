import OptionElementInitiator from '../utils/option-element-initiator';
import SearchButtonInitiator from '../utils/search-button-initiator';

class SearchBarContent extends HTMLElement {
  connectedCallback() {
    this['data-flag'] = this.getAttribute('data-flag') || null;
    this.render();
  }

  render() {
    if (this['data-flag'] === 'in-landing-page') {
      this.innerHTML = this.searchBarLandingPage();
    } else {
      this.innerHTML = this.searchBarSearchPage();
    }

    OptionElementInitiator.init({
      selectProvinceElem: this.querySelector('#province'),
      selectCityElem: this.querySelector('#city'),
    });

    SearchButtonInitiator.init({
      buttonContainer: this.querySelector('#btn-search-container'),
    });
  }

  searchBarLandingPage() {
    return `
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
            </select>
          </div>
          <div class="form-group">
            <label for="city">Pilih Kabupaten / Kota</label>
            <select class="form-control" id="city">
              <option selected value>Pilih Kab/Kota ...</option>
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
  }

  searchBarSearchPage() {
    return `
    <div class="col-12 col-md-10 mx-auto">
    <h1 class="text-center heading-1" tabindex="0">Cek Ketersediaan Rawat Inap Rumah Sakit</h1>
    <div
      class="container-search d-flex flex-column flex-lg-row justify-content-between align-items-center text-center">
      <div class="col-12 col-md-5 col-lg-3 p-0 mb-4 mb-lg-0">
        <div class="pilihan-covid d-flex justify-content-center justify-content-md-between">
          <div class="form-check mr-2 mr-lg-0 mr-xl-3">
            <input class="form-check-input" type="radio" name="inpatient" id="isCovid1" value="Covid" checked>
            <label class="form-check-label" for="isCovid1">
              Covid
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="inpatient" id="isCovid2" value="option1" checked>
            <label class="form-check-label" for="isCovid2">
              Non-Covid
            </label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 p-0">
        <div class="dropdown-covid d-flex flex-column flex-lg-row">
          <select class="custom-select border-0 mr-2 mb-4 mb-lg-0" id="province">
            <option selected>Pilih Provinsi ...</option>
          </select>
          <select class="custom-select border-0 mb-4 mb-lg-0" id="city">
            <option selected>Pilih Kabupaten / Kota ...</option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-2 px-0" id="btn-search-container">
        <button class="btn btn-danger btn-cari w-100" tabindex="0">Cari <span class="iconify ml-2" data-icon="fa-solid:arrow-right"
            style="color: white;" data-width="15"></span></button>
      </div>
    </div>
    </div>    
    `;
  }
}

customElements.define('search-bar-content', SearchBarContent);

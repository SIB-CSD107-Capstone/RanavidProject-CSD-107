import OptionElementInitiator from '../utils/option-element-initiator';
import SearchButtonInitiator from '../utils/search-button-initiator';

class SearchBarContent extends HTMLElement {
  connectedCallback() {
    this['data-flag'] = this.getAttribute('data-flag') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
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

    OptionElementInitiator.init({
      selectProvinceElem: this.querySelector('#province'),
      selectCityElem: this.querySelector('#city'),
    });

    SearchButtonInitiator.init({
      buttonContainer: this.querySelector('#btn-search-container'),
    });
  }
}

customElements.define('search-bar-content', SearchBarContent);

import {
  createSearchBarTemplate,
  // createSearchHospitalBarTemplate,
  createSearchResultTemplate,
} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import IndoHospitalBedSource from '../../data/indo-hospital-bed-source';

const Search = {
  async render() {
    const navJumbo = document.querySelector('nav');
    if (navJumbo.classList.contains('withJumbo')) {
      navJumbo.classList.remove('withJumbo');
    }
    document.querySelector('#main-content').setAttribute('class', 'container');
    return `
    <section class="pencarian-rs"></section>
    <section class="hasil-pencarian">
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
          
    </section>
    `;
  },

  async afterRender() {
    const searchHospitalBarContainer = document.querySelector('.pencarian-rs');
    const cardHasilElem = document.querySelector('.card-hasil');

    // searchHospitalBarContainer.innerHTML = createSearchHospitalBarTemplate();
    searchHospitalBarContainer.innerHTML = createSearchBarTemplate('in-search-page');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idProv = url.id_or_sub;
    const idCity = url.second_id;
    const {
      type,
    } = url;
    const hospitalsList = await IndoHospitalBedSource.indoHospitalsByType(idProv, idCity, type);
    cardHasilElem.innerHTML = '';
    cardHasilElem.appendChild(createSearchResultTemplate(hospitalsList.hospitals));
  },
};

export default Search;

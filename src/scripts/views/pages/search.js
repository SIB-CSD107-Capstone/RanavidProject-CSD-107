import {
  createSearchBarTemplate,
  createSearchResultTemplate,
} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import IndoHospitalBedSource from '../../data/indo-hospital-bed-source';

const Search = {
  async render() {
    document.querySelector('#main-content').setAttribute('class', 'container');
    return `
    <section class="pencarian-rs"></section>
    <section class="hasil-pencarian">
      <p tabindex="0">Hasil Pencarian</p>
        <h2 class="heading-2" tabindex="0">Daftar Rumah Sakit <span class="d-red">.</span></h2>
        <div class="card-hasil">
          
        </div>   
    </section>
    `;
  },

  async afterRender() {
    const searchHospitalBarContainer = document.querySelector('.pencarian-rs');
    const cardHasilElem = document.querySelector('.card-hasil');

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
import {
  createSearchBarTemplate,
  createSearchResultTemplate,
} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import IndoHospitalBedSource from '../../data/indo-hospital-bed-source';
import FindHelper from '../../utils/find-helper';
// import LoadingHelper from '../../utils/loading-helper';

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
        <h2 class="heading-2 m-0 p-0" tabindex="0">Daftar Rumah Sakit <span class="d-red">.</span></h2>
        <small class="info-area" tabindex="0"></small>
        <div class="card-hasil mt-4">
          
        </div>   
    </section>
    `;
  },

  async afterRender() {
    document.title = 'Search Hospital - Ranavid Apps';

    const searchHospitalBarContainer = document.querySelector('.pencarian-rs');
    const cardHasilElem = document.querySelector('.card-hasil');

    searchHospitalBarContainer.innerHTML = createSearchBarTemplate('in-search-page');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const provId = url.id_or_sub;
    const cityId = url.second_id;
    const {
      type,
    } = url;

    const indoProvinces = await IndoHospitalBedSource.indoProvinces();
    const indoCities = await IndoHospitalBedSource.indoCitiesDistricts(provId);
    const provinceName = FindHelper.findProviceById(provId, indoProvinces.provinces).name;
    const cityName = FindHelper.findCityById(cityId, indoCities.cities).name;

    const infoAreaElem = document.querySelector('.info-area');
    infoAreaElem.innerText = `(provinsi : ${provinceName}, kota/kab : ${cityName})`;

    const hospitalsList = await IndoHospitalBedSource.indoHospitalsByType(provId, cityId, type);
    cardHasilElem.innerHTML = '';
    cardHasilElem.appendChild(createSearchResultTemplate(hospitalsList.hospitals, type));
  },
};

export default Search;

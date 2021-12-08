import {
  createSearchBar,
  createStatisticsBar,
} from '../templates/template-creator';

import SearchButtonInitiator from '../../utils/search-button-initiator';
import IndoHospitalBedSource from '../../data/indo-hospital-bed-source';

const Home = {
  async render() {
    const mainContentElem = document.querySelector('#main-content');
    if (mainContentElem.classList.contains('container')) {
      mainContentElem.classList.remove('container');
    }
    return `
    <section id="search-bar" class="search-bar"></section>
    <section id="statistics" class="statistics"></section>
    `;
  },

  async afterRender() {
    const searchBar = document.querySelector('#search-bar');
    const statisticsBar = document.querySelector('#statistics');

    const indoProvinces = await IndoHospitalBedSource.indoProvinces();

    searchBar.innerHTML = createSearchBar(indoProvinces.provinces);

    const selectCityElem = document.getElementById('city');
    const selectProvinceElem = document.getElementById('province');
    selectProvinceElem.addEventListener('change', async (event) => {
      console.log(event.target.value);
      const indoCities = await IndoHospitalBedSource.indoCitiesDistricts(event.target.value);
      console.log(indoCities);
      let optionCities = '<option selected value>Pilih Kab/Kota ...</option>';
      indoCities.cities.forEach((city) => {
        optionCities += `
        <option value="${city.id}">${city.name}</option>
        `;
      });

      selectCityElem.innerHTML = optionCities;
    });

    statisticsBar.innerHTML = createStatisticsBar();

    SearchButtonInitiator.init({
      buttonContainer: document.querySelector('#btn-search-container'),
    });

    const ButtonsTypeOfHospitalization = document.querySelectorAll('button.form-check');

    ButtonsTypeOfHospitalization.forEach((btnType) => {
      btnType.addEventListener('click', (event) => {
        if (event.target.classList.contains('form-check')) {
          event.target.firstElementChild.checked = true;
        }
      });
    });
  },
};

export default Home;

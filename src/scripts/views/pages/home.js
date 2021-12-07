/* eslint-disable no-undef */
import {
  createSearchBar,
  createStatisticsBar,
} from '../templates/template-creator';

import SearchButtonInitiator from '../../utils/search-button-initiator';

const Home = {
  async render() {
    return `
    <section id="search-bar" class="search-bar"></section>
    <section id="statistics" class="statistics"></section>
    `;
  },

  async afterRender() {
    const searchBar = document.querySelector('#search-bar');
    const statisticsBar = document.querySelector('#statistics');

    searchBar.innerHTML = createSearchBar();
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

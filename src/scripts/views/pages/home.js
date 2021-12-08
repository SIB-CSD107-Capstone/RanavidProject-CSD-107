import {
  createSearchBar,
  createStatisticsBar,
} from '../templates/template-creator';

import CovidCasesIndoSource from '../../data/covid-cases-indo-source';

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

    // searchBar.appendChild(createSearchBar());
    searchBar.innerHTML = createSearchBar();

    const statisticsBar = document.querySelector('#statistics');
    const dataStatisticsCovidIndo = await CovidCasesIndoSource.totalCases();

    statisticsBar.innerHTML = createStatisticsBar(dataStatisticsCovidIndo);

    const ButtonsTypeOfHospitalization = document.querySelectorAll('button.form-check');
    // for if btn element type of hospitalization on click, so tag input type radion is checked
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

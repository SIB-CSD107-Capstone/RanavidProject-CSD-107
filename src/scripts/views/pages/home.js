import {
  createSearchBarTemplate,
  createStatisticContentTemplate,
} from '../templates/template-creator';

import CovidCasesIndoSource from '../../data/covid-cases-indo-source';

const Home = {
  async render() {
    const navJumbo = document.querySelector('nav');
    navJumbo.classList.add('withJumbo');
    const mainContentElem = document.querySelector('#main-content');
    if (mainContentElem.classList.contains('container')) {
      mainContentElem.classList.remove('container');
    }

    return `
    <section id="search-bar" class="search-bar lazyload"></section>
    <section id="statistics" class="statistics"></section>
    `;
  },

  async afterRender() {
    document.title = 'Ranavid Apps';
    const searchBar = document.querySelector('#search-bar');

    searchBar.innerHTML = createSearchBarTemplate('in-landing-page');

    const statisticsBar = document.querySelector('#statistics');
    const dataStatisticsCovidIndo = await CovidCasesIndoSource.totalCases();
    dataStatisticsCovidIndo.forEach((data) => {
      statisticsBar.appendChild(createStatisticContentTemplate(data));
    });

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

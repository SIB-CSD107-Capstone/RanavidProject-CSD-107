import {
  createSearchBar,
  createStatisticsBar
} from '../templates/template-creator';

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
  }


}

export default Home;
import {
  createSearchHospitalBarTemplate,
  createSearchResultTemplate
} from '../templates/template-creator';

const Search = {
  async render() {
    document.querySelector('#main-content').setAttribute('class', 'container');
    return `
    <section class="pencarian-rs"></section>
    <section class="hasil-pencarian"></section>
    `;
  },

  async afterRender() {
    const searchHospitalElem = document.querySelector('.pencarian-rs');
    const searchResultElem = document.querySelector('.hasil-pencarian');

    searchHospitalElem.innerHTML = createSearchHospitalBarTemplate();
    searchResultElem.innerHTML = createSearchResultTemplate();
  },
};

export default Search;
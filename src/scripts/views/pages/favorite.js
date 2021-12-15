import {
  createBtnGroupHospitalizationTemplate,
  createFavoriteHospitalTemplate,
  createFavoriteSearchBarTemplate,
  createSearchResultTemplate,
} from '../templates/template-creator';
import FavoriteHospitalIdb from '../../data/favorite-hospital-idb';

const Favorite = {
  async render() {
    const navJumbo = document.querySelector('nav');
    if (navJumbo.classList.contains('withJumbo')) {
      navJumbo.classList.remove('withJumbo');
    }
    return `
    <section id="favorite-hospital" class="favorite-hospital">
      <div class="container" id="favorite-container">
        <header class="my-5">
          <h2 class="text-center font-weight-bold" tabindex="0">Daftar Rumah Sakit Yang Kamu Sukai</h2>

          </header>

        <div class=" my-5" id="btn-category-container"></div>

        <div class="card-hasil"></div>
      </div>
      
    </section>
    `;
  },

  async afterRender() {
    document.title = 'favorite hospital';
    // const favoriteHospitalElem = document.querySelector('#favorite-hospital');
    // favoriteHospitalElem.innerHTML = createFavoriteHospitalTemplate();

    /* set favorite search bar */
    // const favoriteSearchContainerElem = document.getElementById('input-search-container');
    // favoriteSearchContainerElem.appendChild(createFavoriteSearchBarTemplate());

    /* set btn-group type inpatient */
    const btnCategoryContainerElem = document.getElementById('btn-category-container');
    btnCategoryContainerElem.appendChild(createBtnGroupHospitalizationTemplate());

    const defaultType = '1';
    const cardHasilElem = document.querySelector('.card-hasil');
    const hospitals = await FavoriteHospitalIdb.getHospitalsByType(defaultType);

    cardHasilElem.appendChild(createSearchResultTemplate(hospitals, defaultType));
  },
};

export default Favorite;

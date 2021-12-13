import {
  createBtnGroupHospitalizationTemplate,
  createFavoriteHospitalTemplate,
  createFavoriteSearchBarTemplate,
} from '../templates/template-creator';

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

        <div class="row justify-content-center">
          <div class="col-10 col-md-6" id="input-search-container"></div>
        </div>

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
    const favoriteSearchContainerElem = document.getElementById('input-search-container');
    favoriteSearchContainerElem.appendChild(createFavoriteSearchBarTemplate());

    /* set btn-group type inpatient */
    const btnCategoryContainerElem = document.getElementById('btn-category-container');
    btnCategoryContainerElem.appendChild(createBtnGroupHospitalizationTemplate());
  },
};

export default Favorite;

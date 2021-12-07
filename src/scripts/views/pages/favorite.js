import {
  createFavoriteHospitalTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section id="favorite-hospital" class="favorite-hospital"></section>
    `;
  },

  async afterRender() {
    const favoriteHospitalElem = document.querySelector('#favorite-hospital');

    favoriteHospitalElem.innerHTML = createFavoriteHospitalTemplate();
  },
};

export default Favorite;

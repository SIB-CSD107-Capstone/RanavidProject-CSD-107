import {
  createFavoriteHospitalTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    const navJumbo = document.querySelector('nav');
    if (navJumbo.classList.contains('withJumbo')) {
      navJumbo.classList.remove('withJumbo');
    }
    return `
    <section id="favorite-hospital" class="favorite-hospital"></section>
    `;
  },

  async afterRender() {
    document.title = 'favorite hospital';
    const favoriteHospitalElem = document.querySelector('#favorite-hospital');

    favoriteHospitalElem.innerHTML = createFavoriteHospitalTemplate();
  },
};

export default Favorite;

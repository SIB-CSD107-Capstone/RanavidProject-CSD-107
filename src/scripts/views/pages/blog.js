import {
  createAboutCovid,
} from '../templates/template-creator';
// import MediaDBSource from '../../data/mediadb-source';

const Blog = {
  async render() {
    const mainContent = document.querySelector('#main-content');
    mainContent.setAttribute('class', 'container');
    return `
    <section class="about-covid">
    </section>
    `;
  },

  async afterRender() {
    const aboutContainer = document.querySelector('.about-covid');
    aboutContainer.innerHTML = createAboutCovid();
  },
};

export default Blog;

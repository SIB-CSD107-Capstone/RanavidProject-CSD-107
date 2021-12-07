import {
  createAboutWebTemplate,
  createFiturWebTemplate,
  createTeamPengembangTemplate,
} from '../templates/template-creator';

const AboutUs = {
  async render() {
    const mainContent = document.querySelector('#main-content');
    mainContent.setAttribute('class', 'container');
    return `
    <section class="about-web"></section>
    <section class="fitur-web text-center"></section>
    <section class="team-pengembang text-center mb-5"></section>
    `;
  },

  async afterRender() {
    const aboutWebElem = document.querySelector('.about-web');
    const fiturWeb = document.querySelector('.fitur-web');
    const teamPengembang = document.querySelector('.team-pengembang');

    aboutWebElem.innerHTML = createAboutWebTemplate();
    fiturWeb.innerHTML = createFiturWebTemplate();
    teamPengembang.innerHTML = createTeamPengembangTemplate();
  },
};

export default AboutUs;

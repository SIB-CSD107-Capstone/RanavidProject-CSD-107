import {
  createHospitalizationDetailTemplate,
} from '../templates/template-creator';

const HospitalizationDetail = {
  async render() {
    const navJumbo = document.querySelector('nav');
    if (navJumbo.classList.contains('withJumbo')) {
      navJumbo.classList.remove('withJumbo');
    }
    const mainContentElem = document.querySelector('#main-content');
    if (mainContentElem.classList.contains('container')) {
      mainContentElem.classList.remove('container');
    }
    return '<section id="detail-rawat-inap" class="detail-rawat-inap  py-5"></section>';
  },

  async afterRender() {
    const hospitalizationDetailElem = document.querySelector('#detail-rawat-inap');

    hospitalizationDetailElem.innerHTML = createHospitalizationDetailTemplate();
  },
};

export default HospitalizationDetail;

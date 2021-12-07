import UrlParser from '../routes/url-parser';
import {
  createInfoAvailableBedButtonTemplate,
} from '../views/templates/template-creator';

const HospitalizationDetailButtonInitiator = {
  init({
    buttonContainer,
  }) {
    this._buttonContainer = buttonContainer;

    this._renderButton();
  },

  _renderButton() {
    this._buttonContainer.innerHTML += createInfoAvailableBedButtonTemplate();

    const btnDetailHospitalization = this._buttonContainer.lastElementChild;
    btnDetailHospitalization.addEventListener('click', (event) => {
      event.stopPropagation();

      const partUrl = UrlParser.parseActiveUrlWithoutCombiner();

      if (typeof (Storage) !== 'undefined') {
        // simpan partUrl search page di session storage
        sessionStorage.setItem('previousUrl', JSON.stringify(partUrl));
      } else {
        console.log('Oops your browser is not support session storage feature');
      }
      // contoh 1 id hospital 
      const idHospital = '3216399';
      window.location.href = `/#/rumah-sakit/detail-rawat-inap/${idHospital}/1`;
    })
  },
};

export default HospitalizationDetailButtonInitiator;
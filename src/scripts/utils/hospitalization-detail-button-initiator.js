import UrlParser from '../routes/url-parser';
import {
  createInfoAvailableBedButtonTemplate,
} from '../views/templates/template-creator';

const HospitalizationDetailButtonInitiator = {
  init({
    buttonContainer,
    id,
    bedAvailability,
    type,
  }) {
    this._buttonContainer = buttonContainer;
    this._id = id;
    this._bedAvailability = bedAvailability;
    this._type = type;

    this._renderButton();
  },

  _renderButton() {
    this._buttonContainer.innerHTML += createInfoAvailableBedButtonTemplate(this._bedAvailability);
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
      const idHospital = this._id;
      window.location.href = `/#/rumah-sakit/detail-rawat-inap/${idHospital}/${this._type}`;
    });
  },
};

export default HospitalizationDetailButtonInitiator;

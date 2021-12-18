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
    provId,
    cityId,
  }) {
    this._buttonContainer = buttonContainer;
    this._id = id;
    this._bedAvailability = bedAvailability;
    this._type = type;
    this._provId = provId;
    this._cityId = cityId;

    this._renderButton();
  },

  _renderButton() {
    this._buttonContainer.innerHTML += createInfoAvailableBedButtonTemplate(this._bedAvailability);
    const btnDetailHospitalization = this._buttonContainer.lastElementChild;
    const hospitalId = this._id;
    btnDetailHospitalization.addEventListener('click', (event) => {
      event.stopPropagation();

      const partsUrl = UrlParser.parseActiveUrlWithoutCombiner();

      if (typeof (Storage) !== 'undefined') {
        // simpan partUrl search page di session storage
        console.log(partsUrl);
        partsUrl.id_or_sub = this._provId;
        partsUrl.second_id = this._cityId;
        console.log(partsUrl);
        sessionStorage.setItem('previousUrl', JSON.stringify(partsUrl));
      } else {
        console.log('Oops your browser is not support session storage feature');
      }

      window.location.href = `/#/rumah-sakit/detail-rawat-inap/${hospitalId}/${this._type}`;
    });
  },
};

export default HospitalizationDetailButtonInitiator;

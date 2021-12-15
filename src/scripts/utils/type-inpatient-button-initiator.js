import FavoriteHospitalIdb from '../data/favorite-hospital-idb';
import {
  createSearchResultTemplate,
} from '../views/templates/template-creator';

const TypeInpatientButtonInitiator = {
  init({
    btnCovid,
    btnNonCovid,
  }) {
    this._btnCovid = btnCovid;
    this._btnNonCovid = btnNonCovid;

    this._addEventOnButton();
  },

  _addEventOnButton() {
    const covidType = '1';
    const nonCovidType = '2';
    const cardHasilElem = document.getElementsByClassName('card-hasil')[0];

    this._btnCovid.addEventListener('click', async () => {
      this._btnCovid.querySelector('#covid').checked = true;
      const hospitalsByType = await FavoriteHospitalIdb.getHospitalsByType(covidType);
      cardHasilElem.innerHTML = '';
      cardHasilElem.appendChild(createSearchResultTemplate(hospitalsByType, covidType));
    });

    this._btnNonCovid.addEventListener('click', async () => {
      this._btnNonCovid.querySelector('#non-covid').checked = true;
      const hospitalsByType = await FavoriteHospitalIdb.getHospitalsByType(nonCovidType);
      cardHasilElem.innerHTML = '';
      cardHasilElem.appendChild(createSearchResultTemplate(hospitalsByType, nonCovidType));
    });
  },

};

export default TypeInpatientButtonInitiator;

import FavoriteHospitalIdb from '../data/favorite-hospital-idb';

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
    console.log(this._btnCovid);
    this._btnCovid.addEventListener('click', async () => {
      const hospitalsByType = await FavoriteHospitalIdb.getHospitalsByType('1');
      console.log(hospitalsByType);
    });

    this._btnNonCovid.addEventListener('click', async () => {
      const hospitalsByType = await FavoriteHospitalIdb.getHospitalsByType('2');
      console.log(hospitalsByType);
    });
  },

};

export default TypeInpatientButtonInitiator;

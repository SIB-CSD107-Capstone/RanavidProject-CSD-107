import Swal from 'sweetalert2';
import {
  createSearchButton,
  createSearchResultTemplate,
} from '../views/templates/template-creator';
import IndoHospitalBedSource from '../data/indo-hospital-bed-source';

const SearchButtonInitiator = {
  init({
    buttonContainer,
  }) {
    this._buttonContainer = buttonContainer;

    this._renderButton();
  },
  _renderButton() {
    // check if the buttonContainer is on the landing page
    if (this._buttonContainer.classList.contains('btn-search-landing')) {
      this._buttonContainer.innerHTML = createSearchButton('in-landing-page');
    } else {
      this._buttonContainer.innerHTML = createSearchButton('in-search-page');
    }

    const searchButton = document.querySelector('#btn-cari-rs');
    searchButton.addEventListener('click', async (event) => {
      event.stopPropagation();

      const selectProvinceElemVal = document.querySelector('#province').value;
      const selectCityElemVal = document.querySelector('#city').value;

      // cek jika btn type covid di click maka nilai variabel = 1;
      const typeInpatientVal = (document.querySelector('input#covid').checked) ? 1 : 2;

      if (selectProvinceElemVal && selectCityElemVal) {
        if (this._buttonContainer.classList.contains('btn-search-landing')) {
          window.location.href = `/#/rumah-sakit/${selectProvinceElemVal}/${selectCityElemVal}/${typeInpatientVal}`;
        } else {
          const cardHasilElem = document.querySelector('.card-hasil');

          const hospitalsList = await IndoHospitalBedSource.indoHospitalsByType(selectProvinceElemVal, selectCityElemVal, typeInpatientVal);
          cardHasilElem.innerHTML = '';
          cardHasilElem.appendChild(createSearchResultTemplate(hospitalsList.hospitals, typeInpatientVal));
        }
      } else {
        Swal.fire({
          title: 'Warning!',
          text: 'Oops Pilihan Provinsi dan Kota/Kab Harus diisi',
          icon: 'warning',
          confirmButtonText: 'Ok',
        });
      }
    });
  },
};

export default SearchButtonInitiator;

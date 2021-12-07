import Swal from 'sweetalert2';
import {
  createSearchButton,
} from '../views/templates/template-creator';

const SearchButtonInitiator = {
  init({
    buttonContainer,
  }) {
    this._buttonContainer = buttonContainer;

    this._renderButton();
  },
  _renderButton() {
    this._buttonContainer.innerHTML = createSearchButton();

    const searchButton = document.querySelector('#btn-cari-rs');
    searchButton.addEventListener('click', (event) => {
      event.stopPropagation();

      const selectProvinceElemVal = document.querySelector('#province').value;
      const selectCityElemVal = document.querySelector('#city').value;
      const typeInpatientVal = (document.querySelector('input[name=inpatient]').checked) ? 1 : 2;

      if (selectProvinceElemVal && selectCityElemVal) {
        window.location.href = `/#/rumah-sakit/${selectProvinceElemVal}/${selectCityElemVal}/${typeInpatientVal}`;
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

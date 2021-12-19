import FavoriteButtonInitiator from '../utils/favorite-button-initiator';
import BtnTelpInitiator from '../utils/btn-telp-initiator';

class InfoHospital extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set hospital(hospital) {
    this._hospital = hospital;
    this.render();
  }

  render() {
    if (this._hospital) {
      this.innerHTML = `
      <div class="title-wrapper d-flex">
        <h4 class="rs-name" tabindex="0">${this._hospital.name}</h4>
        <button class="btn-favorite">
          <span class="iconify like-icon" data-icon="fa-solid:heart" tabindex="0"
             data-width="46" data-height="44"
            title="favorite rumah sakit"></span>
        </button>

      </div>
      
      <p class="rs-address" tabindex="0">${this._hospital.address}</p>
      <div class="detail-util d-flex flex-column flex-md-row">
        <a href="${this._hospital.gmaps}" target="_blank" rel="noopener" class="btn btn-outline-info btn-map pt-2 active-shadow mb-3 mb-md-0 mr-0 mr-md-3" style="border-color: #007D51 !important;color: #007D51;">Lihat Peta <span
            class="iconify" data-icon="simple-icons:googlemaps"></span></a>
        <button class="btn btn-info btn-telp active-shadow">
        </button>
      </div>
      `;

      const hospital = {
        ...this._hospital,
      };
      delete hospital.gmaps;
      delete hospital.bedDetail;

      FavoriteButtonInitiator.init({
        favoriteButton: this.querySelector('.btn-favorite'),
        hospital,
      });

      BtnTelpInitiator.init({
        btnTelp: this.querySelector('.btn-telp'),
        hospitalPhone: this._hospital.phone,
      });
    }
  }
}

customElements.define('info-hospital', InfoHospital);

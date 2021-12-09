import HospitalizationDetailButtonInitiator from '../utils/hospitalization-detail-button-initiator';

class HospitalItem extends HTMLElement {
  connectedCallback() {
    this.class = this.getAttribute('class') || null;
    this.render();
  }

  set hospital(hospital) {
    this._hospital = hospital;
    this.render();
  }

  render() {
    if (this._hospital) {
      this.innerHTML = `
      <div class="card h-100 card-kamar">
      <div class="card-body p-4 p-md-5 text-center text-md-left" id="as-btn-detail-container">
        <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">${this._hospital.name}</h3>
        <p class="card-text alamat-rs" tabindex="0">${this._hospital.address}</p>
        <p class="update-rs" tabindex="0">${this._hospital.info}</p>
        
      </div>
    </div>
      `;

      HospitalizationDetailButtonInitiator.init({
        buttonContainer: this.querySelector('#as-btn-detail-container'),
        id: this._hospital.id,
        bedAvailability: this._hospital.bed_availability,
      });
    }
  }
};

customElements.define('hospital-item', HospitalItem);

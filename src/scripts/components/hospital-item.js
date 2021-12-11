import HospitalizationDetailButtonInitiator from '../utils/hospitalization-detail-button-initiator';

class HospitalItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set hospital(hospital) {
    this._hospital = hospital;
    this.render();
  }

  set type(type) {
    this._type = type;
  }

  render() {
    this.setAttribute('class', 'col mb-4');
    if (this._hospital) {
      this.innerHTML = `
      <div class="card h-100 card-kamar" data-aos="fade-up">
      <div class="card-body p-4 p-md-5 text-center text-md-left" id="as-btn-detail-container">
        <h3 class="card-title nama-rs" tabindex="0">${this._hospital.name}</h3>
        <p class="card-text alamat-rs" tabindex="0">${this._hospital.address}</p>
        <p class="update-rs" tabindex="0">${(this._hospital.info !== undefined) ? this._hospital.info : this._hospital.available_beds[0].info}</p>
        
      </div>
    </div>
      `;

      HospitalizationDetailButtonInitiator.init({
        buttonContainer: this.querySelector('#as-btn-detail-container'),
        id: this._hospital.id,
        bedAvailability: (this._hospital.bed_availability !== undefined) ? this._hospital.bed_availability : this._hospital.available_beds[0].available,
        type: this._type,
      });
    }
  }
};

customElements.define('hospital-item', HospitalItem);

import './hospital-item';

class HospitalList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set hospitals(hospitals) {
    this._hospitals = hospitals;
    this.render();
  }

  set inpatientType(inpatientType) {
    this._inpatientType = inpatientType;
    this.render();
  }

  render() {
    this.setAttribute('class', 'row row-cols-1 row-cols-md-2 mb-5');
    this.setAttribute('id', 'hospital-list');
    if (this._hospitals) {
      if (this._hospitals.length < 1) {
        this.renderError('Data rumah sakit tidak ditemukan');
      } else {
        this._hospitals.forEach((hospital) => {
          const hospitalItem = document.createElement('hospital-item');
          hospitalItem.hospital = hospital;
          hospitalItem.type = this._inpatientType;
          this.appendChild(hospitalItem);
        });
      }
    } else {
      this.renderError('something wrong');
    }
  }

  renderError(message) {
    this.classList.remove('row-cols-md-2');
    this.innerHTML = `
    <div class="card bg-info">
      <div class="card-body">
      <h4 class="text-white text-center" tabindex="0">${message}</h4>
      </div>
    </div>
    `;
  }
}

customElements.define('hospital-list', HospitalList);

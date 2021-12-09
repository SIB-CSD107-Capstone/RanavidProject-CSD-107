import './hospital-item';

class HospitalList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set hospitals(hospitals) {
    this._hospitals = hospitals;
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
          this.appendChild(hospitalItem);
        });
      }
    } else {
      this.renderError('something wrong');
    }
  }

  renderError(message) {
    this.innerHTML = `<h4 class="text-secondary text-center">${message}</h4>`;
  }
}

customElements.define('hospital-list', HospitalList);

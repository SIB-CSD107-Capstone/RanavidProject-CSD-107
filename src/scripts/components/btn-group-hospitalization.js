import TypeInpatientButtonInitiator from '../utils/type-inpatient-button-initiator';

class BtnGroupHospitalization extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>Kategori</p>
    <button class="btn accessibility-44 active-shadow" type="button" id="btn-covid" style="background-color: #FE0B0B; color: white;">
      <input class="cursor-pointer" type="radio" name="inpatient" id="covid" value="covid" checked>
      <label class="form-check-label cursor-pointer" for="covid">
        Covid
      </label>
    </button>

    <button class="active-shadow btn ml-2 accessibility-44" type="button" id="btn-nonCovid" style="background-color: #FE0B0B; color: white;">
      <input class="cursor-pointer" type="radio" name="inpatient" id="non-covid" value="non-covid">
      <label class="form-check-label cursor-pointer" for="non-covid">
        Non - Covid
      </label>
    </button>
    `;
    TypeInpatientButtonInitiator.init({
      btnCovid: this.querySelector('#btn-covid'),
      btnNonCovid: this.querySelector('#btn-nonCovid'),
    });
  }
}

customElements.define('btn-group-hospitalization', BtnGroupHospitalization);
